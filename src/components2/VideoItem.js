import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img className="image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <p className="is-size-7 is-bold">{video.snippet.title}</p>
      <hr className="divider" />
    </div>
  )
}

export default VideoItem
