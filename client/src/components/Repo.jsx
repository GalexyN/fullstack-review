import React, { Component } from 'react';

const dataStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none !important',
  margin: '5px 0',
  overflow: 'visible',
  onHover: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: '#E29578',
    textDecoration: 'none !important',
    margin: '5px 0',
    transition: 'all .2s ease-in-out',
    overflow: 'visible',
  }
}

const noStyleOnATag = {
  textDecoration: 'none !important'
}

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ hover: !this.state.hover });
  }

  handleMouseLeave(e) {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div style={dataStyle}>
        <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>{this.props.repo.owner}:{this.props.repo.owner_id}</h5>
        <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}><a href={this.props.repo.html_url} style={noStyleOnATag}>{this.props.repo.repo_name}:{this.props.repo.repo_id}</a></h5>
        <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>{this.props.repo.total_impression_count}</h5>
      </div>
    )
  }
}



export default Repo;