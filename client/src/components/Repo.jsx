import React, { Component } from 'react';

const Repo = (props) => (
  <div>
    <h5>{props.repo.owner}</h5>
    <h5>{props.repo.owner_id}</h5>
    <h5>{props.repo.repo_name}</h5>
    <h5>{props.repo.repo_id}</h5>
  </div>
)

// class Repo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }
//   render() {
//     {console.log('repo props: ', this.props)}
//     return (
//       <div>
//       <h5>{this.props.repo.owner}</h5>
//       <h5>{this.props.repo.owner_id}</h5>
//       <h5>{this.props.repo.repo_name}</h5>
//       <h5>{this.props.repo.repo_id}</h5>
//     </div>
//     )
//   }
// }
export default Repo;