import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = (e) => {
    e.preventDefault()
    
    this.props.onSubmitSearchForm(this.state.term)
  }

  render() {
    return (
      <div style={{ marginBottom: '30px'}}>
        <form onSubmit={this.onFormSubmit} className="field is-horizontal">
            <div className="field-label ">
              <label htmlFor="search" className="label">Image search</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                  type="text" 
                  name="search" 
                  className="input" 
                  value={this.state.term}
                  onChange={e => this.setState({ term: e.target.value})}
                  />
                </div>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default  SearchBar;