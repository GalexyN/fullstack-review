import React, { Component } from 'react';

const dataStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  margin: '5px 0',
  overflow: 'visible',
  onHover: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: 'blue',
    textDecoration: 'none',
    margin: '5px 0',
    transition: 'all .2s ease-in-out',
    overflow: 'visible',

  }
}


class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hover: !this.state.hover });
  }

  handleMouseLeave() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div style={dataStyle}>
        <div style={dataStyle}>
          <div style={dataStyle}></div>
          <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>{this.props.repo.owner}:{this.props.repo.owner_id}</h5>
          <div style={dataStyle}></div>
        </div>
        <div style={dataStyle}>
          <div style={dataStyle}></div>
          <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}><a href={this.props.repo.html_url}>{this.props.repo.repo_name}:{this.props.repo.repo_id}</a></h5>
          <div style={dataStyle}></div>
        </div>
        <div style={dataStyle}>
          <div style={dataStyle}></div>
          <h5 style={this.state.hover ? dataStyle.onHover : dataStyle} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>{this.props.repo.total_impression_count}</h5>
          <div style={dataStyle}></div>
        </div>
      </div>
    )
  }
}



export default Repo;