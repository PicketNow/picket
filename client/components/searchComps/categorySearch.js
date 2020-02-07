import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../../store/interestReducer'
import {Redirect} from 'react-router-dom'

class CategorySearch extends React.Component {
  constructor() {
    super()
    this.state = {
      category: 'Women',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    const interests = this.props.interests

    return (
      <React.Fragment>
        {this.state.submitted ? (
          <Redirect to={`/events/category/${this.state.category}`} />
        ) : null}
        <form>
          <label htmlFor="category"> Select Category: </label>
          <select
            name="category"
            type="text"
            value={this.state.category}
            onChange={this.handleChange}
          >
            {interests &&
              interests.map(interest => (
                <option key={interest.id} value={interest.id}>
                  {interest.name}
                </option>
              ))}
          </select>
          <button type="submit">Search</button>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  interests: state.interests.interests
})

const mapDispatchToProps = dispatch => {
  return {
    getInterests: () => dispatch(getInterestsFromServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearch)
