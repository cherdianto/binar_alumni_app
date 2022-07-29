import React from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react'
import '../../../node_modules/video-react/dist/video-react.css'

export default function MediaPlayer() {
    const source = 'http://media.w3.org/2010/05/bunny/movie.mp4';
    const poster = "https://media.w3.org/2010/05/bunny/poster.png";

    return (
        <div className="playerWrapper">
          <Player
            playsInLine
            poster={poster}
            src={source}
            fluid='true' 
          >
            <ControlBar autoHide={false} />
            <BigPlayButton position="center" />
          </Player>
        </div>
    )
}
