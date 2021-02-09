const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Object,
    required: true,
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const newRepos = new Repo({
    id: data.id,
    name: data.name,
    owner: data.owner
  });

  return newRepos.save()
    .then(response => {
      console.log(`successfully created new data in mdb: ${response}`);
      return response;
    })
    .catch(err => conesole.log(err));
}

const deleteRepo = () => {
  Repo.remove({}, err => console.log('collection removed'));
}

module.exports = {
  Repo,
  save,
  deleteRepo
}

