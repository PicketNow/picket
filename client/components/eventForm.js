import React, {useState} from 'react'
import {Button, TextField, MenuItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
// import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength2 = maxLength(2)
const maxLength4 = maxLength(4)
const minLength = min => value =>
  value && value.length < min ? `Must be 4 characters` : undefined
const minLength4 = minLength(4)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue4 = minValue(4)

function EventForm(props) {
  // const [selectedDate, handleDateChange] = useState(new Date())
  const classes = useStyles()
  console.log(props)
  return (
    <div>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
      <form
        className={classes.root}
        validate
        autoComplete="off"
        id="event-form"
        onSubmit={props.handleSubmit}
      >
        <TextField
          required
          id="standard-required"
          label="Title"
          name="title"
          validate={[required]}
          value={props.state.title}
          onChange={props.handleChange}
        />

        <TextField
          id="standard-multiline-required"
          label="Brief Description"
          name="description"
          validate={[required]}
          value={props.state.description}
          multiline
          rows="6"
          onChange={props.handleChange}
        />

        <TextField
          required
          id="standard-select-interest"
          select
          label="Category"
          name="interestId"
          validate={[required]}
          onChange={props.handleChange}
          value={props.state.interestId}
          helperText="Please select a category"
        >
          {props.allInterests.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          id="standard-required"
          label="Street Address"
          name="stAddress"
          validate={[required]}
          value={props.state.stAddress}
          onChange={props.handleChange}
        />

        <TextField
          required
          id="standard-required"
          label="City"
          name="city"
          validate={[required]}
          value={props.state.city}
          onChange={props.handleChange}
        />

        <TextField
          required
          id="standard-required"
          label="State"
          name="state"
          validate={[required, maxLength2]}
          value={props.state.state}
          onChange={props.handleChange}
        />

        <TextField
          required
          id="standard-required"
          label="Zipcode"
          name="zipcode"
          validate={[required, number]}
          value={props.state.zipcode}
          onChange={props.handleChange}
        />
        {/*
    <TextField required id="standard-required" label="Day" name="day" validate={[required, maxLength2]}value={props.state.day} onChange={props.handleChange} /> */}

        <TextField
          required
          id="standard-select-interest"
          select
          label="Day"
          name="day"
          onChange={props.handleChange}
          value={props.state.day}
          helperText="Please select a day"
        >
          {props.days.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {/*
    <TextField required id="standard-required" label="Month" name="month" validate={[required, maxLength2]} value={props.state.month} onChange={props.handleChange} /> */}
        <TextField
          required
          id="standard-select-interest"
          select
          label="Month"
          name="month"
          onChange={props.handleChange}
          value={props.state.month}
          helperText="Please select a month"
        >
          {props.months.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          id="standard-required"
          label="Year"
          name="year"
          validate={[required, maxLength4, minLength4]}
          value={props.state.year}
          onChange={props.handleChange}
        />

        <TextField
          id="standard-required"
          label="Image Url"
          name="imageUrl"
          value={props.state.imageUrl}
          onChange={props.handleChange}
        />
        {/* <DatePicker required label="Date" id="date-required" name="date" value={selectedDate} onChange={handleDateChange} /> */}
        <TextField
          required
          id="standard-required"
          label="Time"
          name="time"
          value={props.state.time}
          onChange={props.handleChange}
        />

        <Button
          variant="contained"
          type="submit"
          form="event-form"
          label="Submit"
          onSubmit={props.handleSubmit}
        >
          Submit
        </Button>
      </form>
      {/* </MuiPickersUtilsProvider> */}
    </div>
  )
}

export default EventForm
