import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import { getReposByUsername } from '../../helpers/github.js';
import axios from 'axios';
import UserList from './components/UserList.jsx'

//style https://coolors.co/006d77-83c5be-edf6f9-ffddd2-e29578

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      newSearch: false,
      newRepos: 0,
      repoChangeMessage: 'Add more Repos!',
      topUser: '',
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/repos')
      .then(response => {
        this.setState({ repos: response.data })
      })
  }

  async search(term) {
    console.log(`${term} was searched`);
    // TODO
    let prevStateRepoLength = this.state.repos.length;

    // return new Promise((resolve, reject) => {
    //   console.log(getReposByUsername(term)
    // })

    let successfulCreation = await getReposByUsername(term);

    if (successfulCreation) {
      axios.get('/repos')
        .then(response => {
          console.log(response)
          this.setState({ repos: response.data }, () => {
            if (prevStateRepoLength === this.state.repos.length) {
              console.log('successfully searched but the searched repos were duplicates so they were not created!');
              this.setState({ repoChangeMessage: `{${term}}'s repos are already in the database or has no public repos!` })
            } else {
              console.log('successfully searched / created repos in database!');
              this.setState({ newRepos: this.state.repos.length - prevStateRepoLength }, () =>
                this.setState({ repoChangeMessage: `You added ${this.state.newRepos} new repos!` })
              )
            }
          })
        })
    } else {
      console.log('there was an error creating / searching for repos!')
    }
  }

  render() {
    const { repos } = this.state;

    return (
      <div>
        <h1 className="navbar">Github <u>Fetcher</u></h1>
        <div className="container">
          <div>
            <h2>{this.state.repoChangeMessage}</h2>
          </div>
          <div>
            <Search onSearch={this.search.bind(this)} />
      There is a total of <u>{repos.length}</u> repos. <br />
      Here is the list of the <u>top 25</u> repos by impressions: <br />
          </div>
          <div className="userAndRepoContainer">
            <UserList />
            <RepoList repos={repos} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));