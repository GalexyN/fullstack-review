const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

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
    id: 18221276,
    name: 'git-consortium',
    owner: {
      "login": "octocat",
      "id": 583231,
      "avatar_url": "https://avatars0.githubusercontent.com/u/583231?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
  });

  newRepos.save()
    .then(response => {
      console.log(`successfully created new data in mdb`);
      return response;
    })
    .catch(err => conesole.log(err));
}

module.exports = {
  Repo,
  save
}

