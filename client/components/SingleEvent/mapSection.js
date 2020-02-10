import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

const MapSection = props => {
  return (
    <article className="event-location">
      <div>{props.event.stAddress}</div>
      <div>
        {props.event.city}, {props.event.zipcode}
      </div>

      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyChtqg-PMZANprctqFjqW45rYTDCl4BWCo"
      >
        <GoogleMap
          id="google-map"
          mapContainerStyle={{height: '250px', width: '250px'}}
          zoom={14}
          center={{lat: 40.7308, lng: -73.9973}}
        >
          <Marker position={{lat: 40.7308, lng: -73.9973}} />
        </GoogleMap>
      </LoadScript>
    </article>
  )
}

export default MapSection
