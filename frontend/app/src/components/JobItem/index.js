import React, { useState } from 'react'
import './style.scss'

import Markdown from '../Markdown'
import AnimateHeight from 'react-animate-height'

export default (props) => {
  const { title, location, desc, image, endDate, link } = props.job
  console.log(`${title} == ${props.title}: ${title == props.title}`)
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`JobItem ${open ? 'JobItem-expanded' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="JobItem--head">
        <img class="JobItem--image" src={image.url} />
        <div className="JobItem--title-container">
          <span className="JobItem--title">{title}</span>
          <span className="JobItem--location">{location}</span>
          <br />
          <span
            className="JobItem--date"
            style={{
              opacity: open ? '0%' : '100%',
              userSelect: open ? 'none' : 'text',
            }}
          >
            Application ends: <br />
            {endDate}
          </span>
        </div>
      </div>
      <AnimateHeight duration={300} height={open ? 'auto' : 0}>
        <div className="JobItem--date-container">
          <span className="JobItem--date">
            Application ends: <br />
            {endDate}
          </span>
        </div>
        <div className="JobItem--desc-container">
          <Markdown className="JobItem--desc" source={desc} />
        </div>
        <a class="JobItem--link" href={link} target="blank">
          Read More &gt;
        </a>
      </AnimateHeight>
      <i
        className="icon-right-open JobItem--arrow"
        onClick={() => setOpen(!open)}
      />
    </div>
  )
}
