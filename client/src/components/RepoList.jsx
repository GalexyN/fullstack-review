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

  // componentDidMount() {
  //   console.log('did mountL: ', this.props)
  //   this.setState({ repos: this.props.repos, value: this.props.countValue})
  // }

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

    return (
      <div>
        <h4> Repo List Component </h4>
      There are {top25Repos.length} repos. <br />
      Here is the list of the 25 repos by impressions: <br />
        {top25Repos.map((repo, index) => {
          return <Repo repo={repo} key={index} />
        })}
      </div>
    )
  }
}

export default RepoList;