import React from 'react'
import {connect} from 'react-redux'
import {getEventsByZip} from '../../store/event'

class ZipSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    const zipcode = this.state.zip
    await this.props.getEventsByZip(zipcode)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zip"> Enter Zipcode: </label>
          <input
            name="zip"
            type="text"
            value={this.state.zip}
            onChange={this.handleChange}
          />

          <button type="submit">Search</button>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getEventsByZip: zip => dispatch(getEventsByZip(zip))
})

export default connect(null, mapDispatchToProps)(ZipSearch)
