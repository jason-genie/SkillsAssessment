let redis = require('redis')  // Require Redis
let client = redis.createClient({
  host: process.env.REDIS_SERVER
}) // Create a new redis instance

client.on("connect", function() {
  client.hmset('experience:0', [
    'dateFrom', '2018-03-01',
    'dateTo', '2020-11-01',
    'company', "TrueProdigy, USA",
    'role', "Full-stack developer",
    'description', "Work at Prodigy company as a Full-stack developer (MERN stack) and React-Native developer for Hybrid Mobile\ndevelopment. This was a big project and we were able to finish it successfully."
  ])
  client.hmset('experience:1', [
    'dateFrom', '2016-11-01',
    'dateTo', '2018-02-01',
    'company', "Snowfall, UK",
    'role', "DevOps, Backend developer",
    'description', "Python is all the rage in the world and its frameworks are rapidly improving and releasing. I worked as Backend developer using Python frameworks(Flask/Django) and After that, I participated in developing Artificial Intelligence part."
  ])
  client.hmset('experience:2', [
    'dateFrom', '2014-10-01',
    'dateTo', '2016-10-01',
    'company', "Gudiz",
    'role', "Web developer",
    'description', "As a major full-stack developer, I have worked with many projects from scratch to the end including ERP, CMS, Odoo,\nCRM using Javascript frameworks and Python."
  ])

  client.hmset('education:0', [
    'yearFrom', '2009',
    'yearTo', '2014',
    'school', "Moscow University",
    'skills', "[\"Python\",\"React/Redux\",\"Angular\",\"Vue\",\"Svelte\",\"Elixir\",\"Flask/Django\",\"PHP\",\"SQL&NoSQL\"]"
  ])
  

});

exports.get_all_experiences = (req, res, next) => {
  let return_dataset = []

  client.keys('experience:*', (err, id) => {
    let multi = client.multi()
    let keys = Object.keys(id)
    let i = 0

    if(!keys.length) {
      res.send( return_dataset )
      return;
    }
    
    keys.forEach((l) => {
      client.hgetall(id[l], (err, o) => {
        i++
        if (err) { console.log(err) } 
        else {
          temp_data = { ...o, 'id': id[l] }
          return_dataset.push(temp_data)
        }

        if (i == keys.length) {
          res.send( return_dataset )
        }
      })
    })
  })
}

exports.add_experience = (req, res, next) => {
  // post Parameters
  let id = req.body.id
  let dateFrom = req.body.dateFrom
  let dateTo = req.body.dateTo
  let company = req.body.company
  let role = req.body.role
  let description = req.body.description

  // make id the key and assign the id to the other Parameters
  client.hmset(id, [
    'dateFrom', dateFrom,
    'dateTo', dateTo,
    'company', company,
    'role', role,
    'description', description
  ], (err, reply) => {
    if (err) {
      console.log(err)  // callback to log errors
    }

    console.log(reply)  // log success message
    res.send('Experience added successfully') // response back to the client
  });
}

exports.get_all_educations = (req, res, next) => {
  let return_dataset = []

  client.keys('education:*', (err, id) => {
    let multi = client.multi()
    let keys = Object.keys(id)
    let i = 0

    if(!keys.length) {
      res.send( return_dataset )
      return;
    }
    
    keys.forEach((l) => {
      client.hgetall(id[l], (err, o) => {
        i++
        if (err) { console.log(err) } 
        else {
          temp_data = { ...o, 'id': id[l] }
          return_dataset.push(temp_data)
        }

        if (i == keys.length) {
          res.send( return_dataset )
        }
      })
    })
  })
}

exports.add_education = (req, res, next) => {
  // post Parameters
  let id = req.body.id
  let yearFrom = req.body.yearFrom
  let yearTo = req.body.yearTo
  let school = req.body.school
  let skills = req.body.skills

  // make id the key and assign the id to the other Parameters
  client.hmset(id, [
    'yearFrom', yearFrom,
    'yearTo', yearTo,
    'school', school,
    'skills', skills
  ], (err, reply) => {
    if (err) {
      console.log(err)  // callback to log errors
    }

    console.log(reply)  // log success message
    res.send('Education added successfully') // response back to the client
  });
}

exports.delete_data = (req, res, next) => {
  // find key associated with the id and deletes it
  client.del(req.params.id, (err, reply) => {
    if (err) {
      console.log(err)  // callback incase something goes wrong
    }

    console.log(reply)  // log success message
    res.send('Deleted successfully') // response back to the client
  })
}

exports.get_data = (req, res, next) => {
  // id from url Parameter
  let id = req.params.id

  // get all values associated with the key as id
  client.hgetall(id, (err, obj) => {
    if (!obj) {
      res.send('does not exist') // if no user is associated with that id/key return this
    } else {
      obj.id = id

      res.send({
        'user': obj // if user is found return details
      })
    }
  })
}
