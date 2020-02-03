import React from 'react'
import AllInterests from '../components/AllInterests.js'
import AllEvents from '../components/AllEvents.js'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <AllInterests />
        <AllEvents />
      </div>
    )
  }
}
