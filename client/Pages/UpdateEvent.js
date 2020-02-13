import React from 'react'
import UpdateEventForm from '../components/updateEventForm.js'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {updateEvent, getSingleEvent} from '../store/event'
import {Grid} from '@material-ui/core'
import Jumbo from '../components/Jumbo'
import Typography from '@material-ui/core/Typography'

class UpdateEvent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.state = {
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      date: null,
      time: null,
      interest: null,
      typedtitle: false,
      typeddescription: false,
      typedstAddress: false,
      typedcity: false,
      typedstate: false,
      typedzipcode: false,
      typedinterest: false
    }
  }

  componentDidMount() {
    this.props.me()
    this.props.getEvent(this.props.match.params.eventId)
  }

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    let checkTyped = ''.concat('typed', event.target.name)
    this.setState({[checkTyped]: true})
  }

  // eslint-disable-next-line complexity
  isComplete() {
    if (
      !this.state.title ||
      !this.state.description ||
      !this.state.interest ||
      !this.state.stAddress ||
      !this.state.city ||
      !this.state.state ||
      !this.state.zipcode ||
      !this.state.date ||
      !this.state.time
    )
      return false
    else return true
  }

  validateZipCode(elementValue) {
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/
    return zipCodePattern.test(elementValue)
  }

  handleSubmit(event) {
    event.preventDefault()
    const updatedEvent = {
      id: this.props.match.params.eventId,
      title: this.state.title,
      description: this.state.description,
      stAddress: this.state.stAddress,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      date: this.state.date,
      organizerId: this.props.user.id,
      time: this.state.time,
      interestId: this.state.interest
    }
    console.log(updatedEvent)
    this.props.updateEvent(updatedEvent)
    this.setState({
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      date: null,
      time: null,
      interest: ''
    })
  }

  render() {
    console.log('Update event render', this.props)
    console.log('match params', this.props.match.params.eventId)
    return (
      <div>
        <Jumbo />
        <Grid>
          <Typography variant="h4" gutterBottom align="center">
            Update Event
          </Typography>
          <UpdateEventForm
            handleForm={this.handleForm}
            handleSubmit={this.handleSubmit}
            handleTime={this.handleTime}
            handleDate={this.handleDate}
            state={this.state}
            event={this.props.event}
            allInterests={this.allInterests}
            isComplete={this.isComplete}
            validateZipCode={this.validateZipCode}
          />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  event: state.events.singleEvent
})

const mapDispatchToProps = dispatch => ({
  updateEvent: event => dispatch(updateEvent(event)),
  me: () => dispatch(me()),
  getEvent: eventId => dispatch(getSingleEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEvent)
