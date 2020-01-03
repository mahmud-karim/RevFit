import React, { Component } from 'react'
import YouTube from 'react-youtube'


class ReactYouTubeExampleComponent extends Component {
    videoOnReady1(event) {
        // access to player in all event handlers via event.target
        // event.target.playVideoAt(50) // 50 seconds
        // const player = event.target
        event.target.pauseVideo()


        console.log(event.target)
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }
        const { videoId } = this.props
        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady1}


            />
        )
    }
}

export default ReactYouTubeExampleComponent
export class DayThree extends Component {
    render() {
        return (
            <div className="DayThree">
                <ReactYouTubeExampleComponent videoId='eODmQlRGwjQ' />
            </div>
        );


    }
}
