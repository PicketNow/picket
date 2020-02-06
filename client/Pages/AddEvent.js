import React from 'react'
import EventForm from '../components/eventForm.js'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {submitEvent} from '../store/event'

class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      imageUrl: '',
      organizerId: '',
      month: '',
      day: '',
      year: '',
      time: '',
      interestId: ''
    }
  }

  componentDidMount() {
    console.log('CDM FORM', this.props)
    this.props.me()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const organizerId = this.props.user.id
    const date = this.state.date.concat(this.state.time)
    const eventForm = {...this.props.eventForm, ...organizerId, ...date}
    this.props.submitEvent(eventForm)
    this.setState({
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      imageUrl: '',
      organizerId: '',
      date: '',
      time: '',
      interestId: ''
    })
    // this.props.clearFormChange()
  }

  render() {
    const allInterests = [
      'Human Rights',
      'LGBTQIA',
      'Environmental',
      'Anti-war',
      'Immigration',
      'Drug Reform',
      'Policing Reform',
      'Voting Rights',
      'Judicial Activism',
      'Criminal Justice',
      'Women',
      'Economic',
      'Anti-poverty',
      'Childrens Rights',
      'Healthcare Access',
      'Education'
    ]
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const days = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    return (
      <div>
        <h1>Add an event!</h1>
        <EventForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
          allInterests={allInterests}
          months={months}
          days={days}
        />
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
