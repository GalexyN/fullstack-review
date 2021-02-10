import React from 'react';

const dataStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
}

const Repo = (props) => (
  <div style={dataStyle}>
    <h5 style={dataStyle}>{props.repo.owner}:{props.repo.owner_id}</h5>
    <h5 style={dataStyle}><a href={props.repo.html_url}>{props.repo.repo_name}:{props.repo.repo_id}</a></h5>
    <h5 style={dataStyle}>{props.repo.total_impression_count}</h5>
  </div>
)

export default Repo;