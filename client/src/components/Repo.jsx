import React from 'react';

const Repo = (props) => (
  <div style={{position: 'flex', justifyContent: 'space-between'}}>
    <h5>{props.repo.owner}</h5>
    <h5>{props.repo.owner_id}</h5>
    <h5>{props.repo.repo_name}</h5>
    <h5>{props.repo.repo_id}</h5>
  </div>
)

export default Repo;