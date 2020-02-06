import React from 'react'
import AllInterests from '../components/allInterests.js'
import FeaturedEvents from '../components/featuredEvent.js'
import Jumbo from '../components/Jumbo.js'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Jumbo />
        <FeaturedEvents />
        <AllInterests />
      </div>
    )
  }
}

export default HomePage
