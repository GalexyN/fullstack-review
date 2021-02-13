const reposSchema = require('../models/ReposSchema.js');

const getReposAndCreate = async (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let successful = await reposSchema.save(req.body);

  if (successful === 201) {
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
}

const getReposFromDatabase = (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  return new Promise ((resolve, reject) => {

    reposSchema.Repo.find({}).sort({
      total_impression_count: -1,
    })
    .then(data => resolve(res.json(data)))
    .catch(err => reject(res.sendStatus(400)))
  })
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