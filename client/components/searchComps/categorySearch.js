import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../../store/interestReducer'
import {getEventsByCategory} from '../../store/event'

class CategorySearch extends React.Component {
  constructor() {
    super()
    this.state = {
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    const category = this.state.category
    await this.props.getEventsByCategory(category)
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
        <form onSubmit={this.handleSubmit}>
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
          <button className="buttons" type="submit">
            Search
          </button>
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
    getInterests: () => dispatch(getInterestsFromServer()),
    getEventsByCategory: category => dispatch(getEventsByCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearch)
