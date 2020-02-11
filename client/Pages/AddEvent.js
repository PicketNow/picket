import React from 'react'
import EventForm from '../components/eventFormThree.js'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {submitEvent} from '../store/event'
import {Grid} from '@material-ui/core'
import Jumbo from '../components/Jumbo'

class AddEvent extends React.Component {
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
      interest: null
    }
  }

  componentDidMount() {
    this.props.me()
  }

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
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

  handleSubmit(event) {
    event.preventDefault()
    const newEvent = {
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
    this.props.submitEvent(newEvent)
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
    return (
      <div>
        <Jumbo />
        <Grid>
          <h2>Add an event!</h2>
          <EventForm
            handleForm={this.handleForm}
            handleSubmit={this.handleSubmit}
            handleTime={this.handleTime}
            handleDate={this.handleDate}
            state={this.state}
            allInterests={this.allInterests}
            isComplete={this.isComplete}
          />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  submitEvent: event => dispatch(submitEvent(event)),
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
