import React from 'react'
import AllInterests from '../components/AllInterests.js'
import AllEvents from '../components/AllEvents.js'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h2>HOMEPAGE</h2>
        <AllInterests />

        <AllEvents />
      </div>
    )
  }
}

export default HomePage
