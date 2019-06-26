import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="grid-2">
      <div className="grid-2__top">
        <iframe className="iframe__video" title="videi item" src={videoSrc} />
      </div>
      <div className="tile is-ancestor box is-vertical is-12 notification grid-2__bottom">
        <p className="subtitle">{video.snippet.title}</p>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
