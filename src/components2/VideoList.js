import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
  })

  return (
    <div className="grid-1">
      {renderedList}
    </div>
  )
}

export default VideoList
