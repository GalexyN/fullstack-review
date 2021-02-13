import React, { Component } from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: props.repos
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.repos !== this.state.repos) {
      console.log('state has changed');
    }
    if (prevProp.repos.length !== this.props.repos.length) {
      console.log('props has changed')
      this.setState({ repos: this.props.repos })
    }
  }

  render() {

    const top25Repos = this.state.repos.slice(0, 25);
    const { repos } = this.state;

    return (
      <div>
        <div className="repo--container headers">
            <h3>USERNAME:id</h3>
            <h3>REPONAME:id</h3>
            <h3>TOTAL IMPRESSIONS</h3>
        </div>
        <div>

          {top25Repos.map((repo, index) => {
            return <Repo repo={repo} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default RepoList;