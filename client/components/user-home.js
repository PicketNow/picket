import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'

class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }
  render() {
    const user = this.props.user
    return (
      <div>
        <h4>Account email: {user.email}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)

// /**
//  * COMPONENT
//  */
// const UserHome = props => {
//   const {email} = props

//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }

// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

// /**
//  * COMPONENT
//  */
// export const UserHome = props => {
//   const {email} = props

//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
