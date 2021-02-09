const reposSchema = require('../models/ReposSchema.js');

const getReposAndCreate = async (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let newRepos = await reposSchema.save();

  res.send(newRepos)



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