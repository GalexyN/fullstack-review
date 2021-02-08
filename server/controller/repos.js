
const getReposAndCreate = (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.status(200).send('posting to /repos url')
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