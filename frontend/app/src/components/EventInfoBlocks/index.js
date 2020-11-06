import React from 'react'
import './style.scss'

import Image from '../Image'

import { connect } from 'react-redux'

const EventInfoBlocks = (props) => {
  const renderBlocks = () => {
    return props.stats.map((stat) => {
      const content = (
        <React.Fragment>
          <Image image={stat.logo} className="EventInfoBlock--logo" />
          <h6 className="EventInfoBlock--name">{stat.name}</h6>
          <span className="EventInfoBlock--content">{stat.content}</span>
        </React.Fragment>
      )

      if (stat.link) {
        return (
          <a
            className="EventInfoBlock"
            key={stat._id}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        )
      }
      return (
        <div className="EventInfoBlock" key={stat._id}>
          {content}
        </div>
      )
    })
  }

  return <div className="EventInfoBlocks">{renderBlocks()}</div>
}

export default EventInfoBlocks
