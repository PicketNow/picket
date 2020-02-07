import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitEvent} from '../store/event'
import {me} from '../store/user'

let defaultState = {
  title: '',
  description: '',
  stAddress: '',
  city: '',
  state: '',
  zipcode: '',
  //organizerId: '',
  date: ''
}

class BasicEventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      //organizerId: '',
      date: ''
    }
    //this.props.me()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.me()
    console.log(this.props, 'fdsajklfdsa component did mount')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.props, 'fdsajklfdsa', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    let form = Object.assign({}, this.state)
    form.organizerId = this.props.user.id
    //console.log(this.props.user, 'userrrrrrrrrrr')
    console.log(form, 'the formmmmmmm')
    this.props.submitEvent(form)
    this.setState(defaultState)
  }

  render() {
    //console.log(this.props.user)
    //const userId = this.props.user.id

    return (
      <div className="form-container">
        <h1>Add an event!</h1>
        <form className="event-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title"> Title: </label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="description"> Description: </label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="stAddress"> Street Address: </label>
          <input
            name="stAddress"
            type="text"
            value={this.state.stAddress}
            onChange={this.handleChange}
          />
          <label htmlFor="city"> City: </label>
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label htmlFor="state"> State: </label>
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <label htmlFor="zipcode"> Zip Code: </label>
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          {/* <label htmlFor="organizerId"> Organizer ID: </label>
          <input
            name="organizerId"
            type="text"
            value={this.state.OrganizerId}
            onChange={this.handleChange}
          /> */}
          <label htmlFor="date"> Date: </label>
          <input
            name="date"
            type="text"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  submitEvent: newEvent => dispatch(submitEvent(newEvent)),
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicEventForm)
