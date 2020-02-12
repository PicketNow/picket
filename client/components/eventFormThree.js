/* eslint-disable complexity */
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  Container
} from '@material-ui/core'
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
    margin: theme.spacing(6),
    width: '800',
    align: 'center',
    spacing: 2,
    padding: 2
  },
  textField: {}
}))

function EventForm(props) {
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
    <Container spacing={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form
          validate
          className={classes.root}
          autoComplete="off"
          id="event-form"
        >
          <Grid>
            <div style={{width: '100%'}}>
              <Box display="flex" bgcolor="background.paper">
                <TextField
                  required
                  id="standard-required"
                  label="Title"
                  name="title"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="text"
                  error={props.state.typedtitle && !props.state.title.length}
                  value={props.state.title}
                  onChange={props.handleForm}
                />
              </Box>
            </div>
          </Grid>
          <Grid>
            <div style={{width: '100%'}}>
              <Box display="flex" justifycontent="flex-start">
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Description"
                  name="description"
                  variant="outlined"
                  fullwidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  multiline
                  rows="6"
                  error={
                    props.state.typeddescription &&
                    (!props.state.description.length ||
                      props.state.description.length > 140)
                  }
                  value={props.state.description}
                  onChange={props.handleForm}
                  helperText="Please include a brief description of your event"
                />
                <TextField
                  InputLabelProps={{shrink: true}}
                  required
                  id="interest-select"
                  select
                  label="Select"
                  error={props.state.typedinterest && !props.state.interest}
                  name="interest"
                  helperText="Please select the category for your event"
                  onChange={props.handleForm}
                >
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
                </TextField>
              </Box>
            </div>
          </Grid>
          <Grid>
            <div>
              <Box display="flex" justifycontent="flex-start">
                <TextField
                  flexGrow={1}
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="standard-required"
                  label="Street Address"
                  name="stAddress"
                  fullwidth
                  error={
                    props.state.typedstAddress && !props.state.stAddress.length
                  }
                  value={props.state.stAddress}
                  onChange={props.handleForm}
                />
                <TextField
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="standard-required"
                  label="City"
                  name="city"
                  fullwidth
                  error={props.state.typedcity && !props.state.city.length}
                  value={props.state.city}
                  onChange={props.handleForm}
                />
                <TextField
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="standard-required"
                  label="State"
                  name="state"
                  fullwidth
                  error={props.state.typedstate && !props.state.state.length}
                  value={props.state.state}
                  onChange={props.handleForm}
                />
                <TextField
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="standard-required"
                  label="Zipcode"
                  name="zipcode"
                  fullwidth
                  error={
                    props.state.typedzipcode &&
                    !props.validateZipCode(props.state.zipcode)
                  }
                  value={props.state.zipcode}
                  onChange={props.handleForm}
                />
              </Box>
            </div>
          </Grid>
          <Grid>
            <div>
              <Box>
                <KeyboardDatePicker
                  required
                  margin="normal"
                  name="date"
                  id="date-picker-required"
                  label="Date"
                  format="MM/dd/yyyy"
                  fullwidth
                  error={!selectedDate}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <TimePicker
                  clearable
                  error={!selectedDate}
                  margin="normal"
                  ampm={true}
                  fullwidth
                  id="time-picker-required"
                  label="Time"
                  name="time"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Box>
            </div>
          </Grid>
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
    </Container>
  )
}

export default EventForm
