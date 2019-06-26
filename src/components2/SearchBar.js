import React, { Component } from 'react'

class SearchBar extends Component {
  state= { term: '' }

  onInputChange = e => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.term)    
  }

  render() {
    return (
      <div style={{ marginBottom: '30px'}} className="grid-search">
      <form onSubmit={this.onFormSubmit} className="field is-horizontal">
          <div className="field-label ">
            <label htmlFor="search" className="label">video search</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                type="text" 
                name="search" 
                className="input" 
                value={this.state.term}
                onChange={this.onInputChange}
                />
              </div>
            </div>
          </div>
      </form>
    </div>
    )
  }
}

export default SearchBar