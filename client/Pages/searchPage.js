import React from 'react'
import {connect} from 'react-redux'
import Jumbo from '../components/Jumbo.js'
import CategorySearch from '../components/searchComps/categorySearch'
import ZipSearch from '../components/searchComps/zipSearch'
import FeaturedEvent from '../components/eventcardTest'
import {getAllEvents, getFilteredEvents} from '../store/event'

class SearchPage extends React.Component {
  async componentDidMount() {
    await this.props.getAllEvents()
  }

  // componentDidUpdate() {
  //   const searches = this.props.searchEvents

  // }

  render() {
    let events = this.props.events
    let searchEvents = this.props.searchEvents || []

    return (
      <React.Fragment>
        <Jumbo />

        <CategorySearch />
        <br />
        <ZipSearch />
        <br />
        <br />
        <br />

        {searchEvents.length > 0 ? (
          <FeaturedEvent events={searchEvents} />
        ) : (
          <FeaturedEvent events={events} />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
  searchEvents: state.events.searchEvents
})

const mapDispatchToProps = dispatch => ({
  getAllEvents: () => dispatch(getAllEvents()),
  getFilteredEvents: category => dispatch(getFilteredEvents(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
