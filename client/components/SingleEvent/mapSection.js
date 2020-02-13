import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
//import {GOOGLE_MAP_KEY} from '../../../secrets'

import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'

const MapSection = props => {
  return (
    <CardContent className="event-location">
      <Typography component="div">{props.event.stAddress}</Typography>
      <Typography component="div">
        {props.event.city}, {props.event.zipcode}
      </Typography>

      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.GOOGLE_MAP_KEY}
      >
        <GoogleMap
          id="google-map"
          mapContainerStyle={{height: '18em', width: '18em'}}
          zoom={14}
          center={props.coords}
        >
          <Marker position={props.coords} />
        </GoogleMap>
      </LoadScript>
    </CardContent>
  )
}

export default MapSection
