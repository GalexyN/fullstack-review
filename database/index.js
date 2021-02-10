const mongoose = require('mongoose');
const axios = require('axios');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

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

let save = async (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let processData = new Promise((resolve, reject) => {
    data.forEach(async repo => {
      // axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contributors`)
      // .then(response => console.log('axios: ', response))
      // .catch(err => console.log(err))
      Repo.findOne({ repo_id: repo.id }).exec()
        .then(response => {
          if (!response) {
            let newRepo = new Repo({
              repo_id: repo.id,
              repo_name: repo.name,
              owner: repo.owner.login,
              owner_id: repo.owner.id,
              stargazers_count: repo.stargazers_count,
              watchers_count: repo.watchers_count,
              forks_count: repo.forks_count,
              html_url: repo.html_url,
            })

            newRepo.save()
              .then(response => {
                console.log(`Successfully created repo: {${response.repo_name}} in DB!`);
              })
              .catch(err => {
                reject(err);
              });
          } else {
            console.log(`repo: {${response.repo_name}} found in DB! Skipping creation of a duplicate`);
          }
        })
    });

    resolve(201)
  });

  let successful = await processData;

  return successful === 201 ? 201 : 404;
}

const deleteRepo = () => {
  Repo.remove({}, err => console.log('collection removed'));
}

module.exports = {
  Repo,
  save,
  deleteRepo
}

