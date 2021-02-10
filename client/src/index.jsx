import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import { getReposByUsername } from '../../helpers/github.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      newSearch: false,
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

    let successfulCreation = await getReposByUsername(term);

    if (successfulCreation) {
      axios.get('/repos')
      .then(response => {
        this.setState({ repos: response.data }, () => {
          if (prevStateRepoLength === this.state.repos.length) {
            console.log('successfully searched but the searched repos were duplicates so they were not created!')
          } else {
            console.log('successfully searched / created repos in database!');
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
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));