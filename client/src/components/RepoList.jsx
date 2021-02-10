import React, { Component } from 'react';
import Repo from './Repo.jsx';

// const RepoList = (props) => (
//   {componentWillReceiveProps(nextProps) {
//     this.setState({ repos: nextProps.repos });
//   }}

// )

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

    const repoListContainer = {
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
    }

    return (
      <div>
        {/* <h4> Repo List Component </h4> */}
      There is a total of {repos.length} repos. <br />
      Here is the list of the top 25 repos by impressions: <br />
        <div style={repoListContainer}>
          <h5 style={repoListContainer}>USERNAME:id</h5>
          <h5 style={repoListContainer}>REPONAME:id</h5>
          <h5 style={repoListContainer}>TOTAL IMPRESSIONS</h5>
        </div>
        {top25Repos.map((repo, index) => {
          return <Repo repo={repo} key={index} />
        })}
      </div>
    )
  }
}

export default RepoList;