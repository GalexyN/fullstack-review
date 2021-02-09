const reposSchema = require('../models/ReposSchema.js');

const getReposAndCreate = async (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let newlySavedRepos = await reposSchema()
  console.log(newlySavedRepos)
}

const getReposFromDatabase = (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.status(200).send('getting to /repos url');
}

module.exports = {
  getReposAndCreate,
  getReposFromDatabase,
}