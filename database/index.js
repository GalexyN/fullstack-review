const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.DB_URI, { useMongoClient: true });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_id: {
    type: Number,
    required: true,
  },
  repo_name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  owner_id: {
    type: Number,
    required: true,
  },
  total_impression_count: {
    type: Number,
    required: true,
  },
  stargazers_count: {
    type: Number,
    required: true,
  },
  watchers_count: {
    type: Number,
    required: true,
  },
  forks_count: {
    type: Number,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let promises = data.map(async repo => {
    let result = await(processData(repo))
    return new Promise((resolve, reject) => {
      resolve(result)
    })
  })

  return Promise.all(promises)
  .then(() => 201)
  .catch(err => 404)
}


const deleteRepo = () => {
  Repo.remove({}, err => console.log('collection removed'));
}

const processData = (repo) => {
  return new Promise((resolve, reject) => {

    Repo.findOne({ repo_id: repo.id })
      .exec()
      .then(response => {
        if (!response) {
          let newRepo = new Repo({
            repo_id: repo.id,
            repo_name: repo.name,
            owner: repo.owner.login,
            owner_id: repo.owner.id,
            total_impression_count: repo.stargazers_count + repo.watchers_count + repo.forks_count,
            stargazers_count: repo.stargazers_count,
            watchers_count: repo.watchers_count,
            forks_count: repo.forks_count,
            html_url: repo.html_url,
          })

          resolve(
            newRepo.save()
              .then(() => console.log(`Successfully created new entry in Database. Repo name: {${repo.name}}`))
              .catch(() => console.log('There was an error creating a new entry in the database'))
          );
        } else {
          resolve(
            console.log(`{${repo.name}} already exists in the database no duplicates!`)
          );
        }
      })
  })
}

module.exports = {
  Repo,
  save,
  deleteRepo
}

