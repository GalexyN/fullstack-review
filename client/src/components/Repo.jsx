import React from 'react';

const Repo = (props) =>
(
  <div className="repo-item--container">
    <div className="repo-item-div-container">
      <h5 className="repo-item--items">{props.repo.owner}:{props.repo.owner_id}</h5>
    </div>
    <div className="repo-item-div-container">
      <h5 className="repo-item--items"><a href={props.repo.html_url}>{props.repo.repo_name}:{props.repo.repo_id}</a></h5>
    </div>
    <div className="repo-item-div-container">
      <h5 className="repo-item--items">{props.repo.total_impression_count}</h5>
    </div>
  </div>
)

export default Repo;