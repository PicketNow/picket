import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../store/interestReducer'
import {Link, Router} from 'react-router-dom'

class AllInterests extends React.Component {
  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    return (
      <div>
        <h3>Categories:</h3>
        <ul>
          {this.props.interests.map(interest => (
            <li key={interest.id}>{interest.name}</li>
          ))}
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllInterests)
