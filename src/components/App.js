import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }

  searchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos' , {
      params: { query: term }
    })
    this.setState({ images: response.data.results })
  }
  render () {
    return (
      <div style={{margin: '20px'}}>
        <SearchBar onSubmitSearchForm={this.searchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
