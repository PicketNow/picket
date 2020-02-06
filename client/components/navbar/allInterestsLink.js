import React from 'react'
import {connect} from 'react-redux'
import {getInterestsFromServer} from '../../store/interestReducer'
import {Link} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

class AllInterestsLink extends React.Component {
  componentDidMount() {
    this.props.getInterests()
  }

  render() {
    return (
      <div>
        {this.props.interests.map(interest => (
          <MenuItem key={interest.id}>
            <Link to={`/events/category/${interest.id}`}>{interest.name}</Link>
          </MenuItem>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllInterestsLink)
