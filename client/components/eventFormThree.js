/* eslint-disable complexity */
import {TextField, Button, MenuItem} from '@material-ui/core'
import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'

// import {submitEvent} from '../store/event'
// import {me} from '../store/user'
// import {connect} from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

function EventForm(props) {
  console.log('EVENT FORM', props)
  const classes = useStyles()

  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  useEffect(() => {
    props.state.date = selectedDate
    props.state.time = selectedDate
  })

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form
        validate
        className={classes.root}
        autoComplete="off"
        id="event-form"
      >
        <TextField
          required
          id="standard-required"
          label="Title"
          name="title"
          error={!props.state.title.length}
          value={props.state.title}
          onChange={props.handleForm}
          helperText="required"
        />
        <br />
        <TextField
          required
          id="outlined-error-helper-text"
          label="Description"
          name="description"
          multiline
          rows="6"
          error={
            !!(!props.state.description.length &&
            props.state.description.length <= 140)
          }
          value={props.state.description}
          onChange={props.handleForm}
          helperText="Please include a brief description of your event - 140 char max"
        />
        <br />
        <FormControl required error={!props.state.interest}>
          <InputLabel id="interest-select">Category</InputLabel>
          <Select onChange={props.handleForm} name="interest">
            <MenuItem value={1}>Human Rights</MenuItem>
            <MenuItem value={2}>LGBTQIA</MenuItem>
            <MenuItem value={3}>Environmental</MenuItem>
            <MenuItem value={4}>Anti-War</MenuItem>
            <MenuItem value={5}>Immigration</MenuItem>
            <MenuItem value={6}>Drug Reform</MenuItem>
            <MenuItem value={7}>Policing</MenuItem>
            <MenuItem value={8}>Voting Rights</MenuItem>
            <MenuItem value={9}>Judicial Activism</MenuItem>
            <MenuItem value={10}>Criminal Justice</MenuItem>
            <MenuItem value={11}>Women's Rights</MenuItem>
            <MenuItem value={12}>Economic</MenuItem>
            <MenuItem value={13}>Anti-Poverty</MenuItem>
            <MenuItem value={14}>Children's Rights</MenuItem>
            <MenuItem value={15}>Healthcare</MenuItem>
            <MenuItem value={16}>Education</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          required
          id="standard-required"
          label="Street Address"
          name="stAddress"
          error={!props.state.stAddress.length}
          value={props.state.stAddress}
          onChange={props.handleForm}
          helperText="required"
        />
        <br />
        <TextField
          required
          id="standard-required"
          label="City"
          name="city"
          error={!props.state.city.length}
          value={props.state.city}
          onChange={props.handleForm}
          helperText="required"
        />
        <br />
        <TextField
          required
          id="standard-required"
          label="State"
          name="state"
          error={!props.state.state.length}
          value={props.state.state}
          onChange={props.handleForm}
          helperText="required"
        />
        <br />
        <TextField
          required
          id="standard-required"
          label="Zipcode"
          name="zipcode"
          error={!props.state.zipcode.length}
          value={props.state.zipcode}
          onChange={props.handleForm}
          helperText="Please enter your event's five digit zipcode"
        />
        <br />
        <KeyboardDatePicker
          required
          margin="normal"
          name="date"
          id="date-picker-required"
          label="Date"
          format="MM/dd/yyyy"
          error={!selectedDate}
          value={selectedDate}
          onChange={handleDateChange}
          // KeyboardButtonProps={{
          //   'aria-label': 'change date'
          // }}
        />
        <TimePicker
          clearable
          error={!selectedDate}
          margin="normal"
          ampm={true}
          id="time-picker-required"
          label="Time"
          name="time"
          value={selectedDate}
          onChange={handleDateChange}
        />
        {props.isComplete() ? (
          <Button
            variant="contained"
            type="submit"
            form="event-form"
            label="Submit"
            onClick={props.handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            form="event-form"
            label="Submit"
            onClick={props.handleSubmit}
            disabled
          >
            Submit
          </Button>
        )}
      </form>
    </MuiPickersUtilsProvider>
  )
}

export default EventForm
