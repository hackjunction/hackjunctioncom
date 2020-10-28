import React, { useState } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { mapHubs } from '../../../../redux/hubs/selectors'

const HubSelector = ({ hubs }) => {
  console.log(hubs)
  const [selectedHub, changeHub] = useState(hubs?.[0]?.id)

  return (
    <div>
      {hubs?.map((hub) => (
        <div
          className={
            selectedHub === hub.id ? 'HubListElem visible' : 'HubListElem'
          }
        >
          <div className="HubName" onClick={() => changeHub(hub.id)}>
            {hub.name}
          </div>
          {/**
          <div className="LocalTime">
            {moment(moment(), 'h:mm a').utcOffset(hub.timezone)}{' '}
          </div>
           */}
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

const mapStateToProps = (state) => ({
  hubs: mapHubs(state),
})

export default connect(mapStateToProps)(HubSelector)
