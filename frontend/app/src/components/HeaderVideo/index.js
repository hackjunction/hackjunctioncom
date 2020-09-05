import React, { PureComponent } from 'react'
import MediaQuery from 'react-responsive'

import './style.scss'
import LinkButton from '../LinkButton/'
import Divider from '../Divider'

const Video = ({ onLoad, src }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={'HeaderVideo--video'}
      onPlay={onLoad}
    >
      <MediaQuery maxWidth={600}>
        <source type="video/mp4" src={src} />
      </MediaQuery>
      <MediaQuery minWidth={601}>
        <MediaQuery maxWidth={900}>
          <source type="video/mp4" src={src} />
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <source type="video/mp4" src={src} />
      </MediaQuery>
    </video>
  )
}

class HeaderVideo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    }

    this.setLoaded = this.setLoaded.bind(this)
  }

  setLoaded() {
    this.setState({
      loaded: true,
    })
  }

  render() {
    const { loaded } = this.state
    const src = this.props.src
    return (
      <div className={`HeaderVideo ${loaded ? 'HeaderVideo-visible' : ''}`}>
        <Video onLoad={this.setLoaded} src={src} />
      </div>
    )
  }
}

export default HeaderVideo
