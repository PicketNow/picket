import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
//import {GOOGLE_MAP_KEY} from '../../../secrets'

const MapSection = props => {
  return (
    <article className="event-location">
      <div>{props.event.stAddress}</div>
      <div>
        {props.event.city}, {props.event.zipcode}
      </div>

      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDC_OaMqwcEmvt84gfJKVLlUNsbMTrgP1w"
      >
        <GoogleMap
          id="google-map"
          mapContainerStyle={{height: '250px', width: '250px'}}
          zoom={14}
          center={props.coords}
        >
          <Marker position={props.coords} />
        </GoogleMap>
      </LoadScript>
    </article>
  )
}

export default MapSection
