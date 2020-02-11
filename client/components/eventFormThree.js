import {TextField, Dialog, Button, IconButton} from '@material-ui/core'
import React from 'react'

import {submitEvent} from '../store/event'
import {me} from '../store/user'
import {connect} from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'

// import Dialog from '@material-ui/Dialog';
// import FlatButton from '@corematerial-ui/FlatButton';
// import IconButton from '@material-ui/IconButton';
// import Add from '@material-ui/svg-icons/content/add'
// import DatePicker from '@corematerial-ui/DatePicker'
// import TimePicker from '@material-ui/TimePicker';
// import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// import SelectField from '@material-ui/SelectField';
// import MenuItem from '@material-ui/MenuItem';

class EventFormThree extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      stAddress: '',
      city: '',
      state: '',
      zipcode: '',
      date: null,
      time: null
    }

    this.handleForm = this.handleForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleTime = this.handleTime.bind(this)
    // this.handleAssignment =this.handleAssignment.bind(this)
  }

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTime(event, time) {
    this.setState({time: time})
  }
  handleDate(event, date) {
    this.setState({date: date})
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
      time: this.state.time
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
      time: null
    })
  }

  // handleAssignment = (event, index, value) => {
  //   this.setState({assigned_to: value, value: value});
  // };

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form validate="true" id="event-form">
            <TextField
              required
              label="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleForm}
            />
            <br />
            <TextField
              required
              label="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleForm}
            />
            <br />
            <TextField
              required
              label="Street Address"
              name="stAddress"
              value={this.state.stAddress}
              onChange={this.handleForm}
            />
            <br />
            <TextField
              required
              label="City"
              name="city"
              value={this.state.city}
              onChange={this.handleForm}
            />
            <br />
            <TextField
              required
              label="State"
              name="state"
              value={this.state.state}
              onChange={this.handleForm}
            />
            <br />
            <TextField
              required
              label="Zipcode"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleForm}
            />
            <br />

            {/* <SelectField
            value={this.state.assigned_to}
            onChange={this.handleAssignment}
            floatingLabelText={"Assign to: "}>
            {this.props.groupMembers.map(function(member) {
              return <MenuItem value={member.id} primaryText={ member.first_name }/>
            })}
          </SelectField><br/> */}

            {/* <DatePicker onChange={this.handleDate} value ={this.state.date} hintText="Date" /> */}
            {/* <TimePicker onChange={this.handleTime} value={this.state.time} hintText="Time" /> */}
            <KeyboardDatePicker
              required
              margin="normal"
              name="date"
              id="date-picker-dialog-required"
              label="Date"
              format="MM/dd/yyyy"
              value={this.state.date}
              onChange={this.handleDate}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />

            <TimePicker
              clearable
              margin="normal"
              ampm={true}
              id="time-picker-required"
              label="Time"
              name="time"
              value={this.state.time}
              onChange={this.handleTime}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
            />

            <Button
              variant="contained"
              type="submit"
              form="event-form"
              label="Submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </form>
        </MuiPickersUtilsProvider>
        {/* </Dialog> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  submitEvent: newEvent => dispatch(submitEvent(newEvent)),
  me: () => dispatch(me)
})

export default connect(mapStateToProps, mapDispatchToProps)(EventFormThree)
