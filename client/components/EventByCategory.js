import React from 'react'
import {getFilteredEvents} from '../store/event'
import {connect} from 'react-redux'
//import event card
import {
  getUserInterests,
  subscribeToInterest,
  unsubscribeFromInterest
} from '../store/interestReducer'
import {Link} from 'react-router-dom'
import EventCard from './EventCard'
import Jumbo from './Jumbo'
import CategorySearch from '../components/searchComps/categorySearch'
import {me} from '../store/user'

export class EventsByCategory extends React.Component {
  constructor(props) {
    super(props)
    this.isSubscribed = this.isSubscribed.bind(this)
    this.handleSubscribe = this.handleSubscribe.bind(this)
  }
  async componentDidMount() {
    const eventCategory = await this.props.match.params.eventCategory
    await this.props.getFilteredEvents(eventCategory)
    await this.props.me()
    const user = this.props.user.id
    await this.props.getUserInterests(user)
  }

  handleSubscribe() {
    const interestId = this.props.match.params.eventCategory
    const userId = this.props.user.id
    if (this.isSubscribed()) {
      this.props.unsubscribeFromInterest(interestId, userId)
    } else this.props.subscribeToInterest(interestId, userId)
  }

  isSubscribed() {
    const interestId = this.props.match.params.eventCategory
    const userInterests = this.props.userInterests
    let interests = []
    this.props.interests.forEach(function(elem) {
      if (userInterests.includes(elem.name)) {
        interests.push(elem.id.toString())
      }
    })
    if (interests.includes(interestId)) {
      return true
    } else return false
  }

  render() {
    let events = this.props.events.events
    let firstElem = this.props.events.events[0]

    return (
      <div>
        <Jumbo />
        <CategorySearch />
        <br />
        <Link to="/events">
          <button className="button" type="button">
            Return to all events
          </button>
        </Link>
        {/*
            <button onClick={this.handleSubscribe} type="button" className="button">Subscribe to this Interest Category</button> */}
        {this.props.user.id ? (
          <div id="subscribe-button-container">
            {this.isSubscribed() ? (
              <button
                onClick={this.handleSubscribe}
                type="button"
                className="button"
              >
                Unsubscribe from Interest Category
              </button>
            ) : (
              <button
                onClick={this.handleSubscribe}
                type="button"
                className="button"
              >
                Subscribe to this Interest Category
              </button>
            )}
          </div>
        ) : (
          <div className="rsvp-button-alt">
            <p id="subscribe-suggest">
              Log in to Subscribe to this Interest Category
            </p>
          </div>
        )}

        <h1> All {firstElem && firstElem.interest.name} Events</h1>

        <div>{events && <EventCard events={events} />}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  user: state.user,
  userInterests: state.interests.userInterests,
  interests: state.interests.interests
})

const mapDispatchToProps = dispatch => ({
  getFilteredEvents: category => dispatch(getFilteredEvents(category)),
  me: () => dispatch(me()),
  getUserInterests: userId => dispatch(getUserInterests(userId)),
  subscribeToInterest: (interestId, userId) =>
    dispatch(subscribeToInterest(interestId, userId)),
  unsubscribeFromInterest: (interestId, userId) =>
    dispatch(unsubscribeFromInterest(interestId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsByCategory)
