const reposSchema = require('../models/ReposSchema.js');

const getReposAndCreate = (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  return new Promise((resolve, reject) => {
    reposSchema.save()
  })
  .then(response => res.status(201).send(response))
}

const getReposFromDatabase = (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  reposSchema.Repo.find()
    .then(data => res.status(201).send(data))
    .catch(err => res.status(404).send(err))

}

const deleteRepo = (req, res) => {
  reposSchema.deleteRepo()
  res.send('database has been removed');
}

module.exports = {
  getReposAndCreate,
  getReposFromDatabase,
  deleteRepo
}