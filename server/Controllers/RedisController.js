let redis = require('redis')  // Require Redis
let client = redis.createClient() // Create a new redis instance

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
