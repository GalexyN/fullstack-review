import React from 'react';

const Repo = (props) => (
  <div>
    <h5>{props.repo.owner}:{props.repo.owner_id}</h5>
    <h5><a href={props.repo.html_url}>{props.repo.repo_name}</a></h5>
    <h5>{props.repo.repo_id}</h5>
    <h5>{props.repo.total_impression_count}</h5>
  </div>
)

export default Repo;