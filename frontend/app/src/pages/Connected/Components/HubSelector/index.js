import React, { useState } from 'react'
import moment from 'moment'

const HubSelector = ({ hubs }) => {
  const [selectedHub, changeHub] = useState(hubs[0].name)

  return (
    <div>
      {hubs.map((hub) => (
        <div
          className={
            selectedHub === hub.name ? 'HubListElem visible' : 'HubListElem'
          }
        >
          <div className="HubName" onClick={() => changeHub(hub.name)}>
            {hub.name}
          </div>
          <div className="LocalTime">
            {moment().utcOffset(hub.timezone).format('h:mm a')}
          </div>
          <div className="HubDetails">
            <p className="HubDetails--country">{hub.country}</p>
            <p className="HubDetails--address">
              {hub.address}
              <br />
              {hub.contact}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HubSelector
