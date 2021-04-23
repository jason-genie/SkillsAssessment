## Description
### Vue.js for client
 - Header, Footer, Tabs
 - 2 Tabs showing CV (Experience, Education)
 - 1 Tab for random number coming from server
 - 1 Tab for Rock-Paper-Scissor demo (server)
 - 1 Tab for Tic-Tac-Toc demo with ai (server)

### Node.js for server
 - APIs returning data for CV
 - API returning random number
 - API for Rock-Paper-Scissor
 - API for Tic-Tac-Toc AI

### Redis for db
 - Database to store educations, experiences
 - DB schema for experience
 ```
{
  "id": "experience:*", // "id": "experience:1", "id": "experience:last", "id": "experience:xxx"
  "dateFrom": "2010-01-01",
  "dateTo": "2011-02-24",
  "company": "Some employer",
  "role": "Junior developer",
  "description": "I was in charge of ..."
}
```
- DB schmea for education
 ```
{
  "id": "education:*", // "id": "education:1", "id": "education:last", "id": "education:xxx"
  "yearFrom": "2012",
  "yearTo": "2015",
  "school": "Hero Academy",
  "skills": [
    "Web Development",
    "Database management",
    "..."
  ]
}
```

## How to install this project
#### Build the docker images using following command
```
docker-compose build
```
#### Run the application using Docker-Compose
```
docker-compose up
```
It will run 4 Docker Images
1. Client - Vue Application (http://localhost:3500)
2. Server - Node.js Server Application (http://localhost:3600)
3. Redis Server port 6379
4. NGINX Server listening port 80

The application can be accessed with link
```
http://localhost/
```

## Thanks to @askeralim, @berkansivri, @serhatyuna