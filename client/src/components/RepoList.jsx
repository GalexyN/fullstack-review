import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div style={{alignContent: 'center'}}>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos. <br />
    Here is the list of repos: <br />
    {props.repos.map((repo, index) => {
      return <Repo repo={repo} key={index}/>
    })}
  </div>
)

export default RepoList;