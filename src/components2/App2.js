import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App2 extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('buildings')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ 
      videos: response.data.items ,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  } 

  render() {
    return (
      <div className="video-grid">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

export default App2