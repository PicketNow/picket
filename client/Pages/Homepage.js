import React from 'react'
import AllInterests from '../components/interestButton.js'
import FeaturedEvents from '../components/featuredEvent.js'
import Jumbo from '../components/Jumbo.js'
import MainFeaturedPost from '../components/jumbotest'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MainFeaturedPost />
        <FeaturedEvents />
        <AllInterests />
      </div>
    )
  }
}

export default HomePage
