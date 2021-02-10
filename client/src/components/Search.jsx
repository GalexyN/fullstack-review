import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    }, () => console.log(`changing -> ${this.state.term}`));
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.term);
    document.getElementsByTagName('input')[0].value = '';
  }

  render() {
    const styles = {

    }

    const placeholderStyles = {
      textAlign: 'center',
    }

    return (<div>
      <h4>Add more repos!</h4>
      <input style={placeholderStyles} value={this.state.terms} placeholder="enter github username" size={'Enter GitHub Username'.length} onChange={this.onChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;