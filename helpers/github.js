const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = async (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `/users/${username}/repos`,
    baseURL: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let successful = await axios(options)
    .then(response => response.data)
    .then(repos => {
      return axios.post('/repos', repos)

    })
    .then(response => {
      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => console.log(err))

    return successful;
}

module.exports.getReposByUsername = getReposByUsername;