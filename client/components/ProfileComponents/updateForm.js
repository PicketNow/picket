import React from 'react'
import updateAccount from '../../store/user'
import {connect} from 'react-redux'

export class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.email,
      image: this.props.image,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      userId: this.props.userId
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateAccount(this.state, this.props.userId)
    this.setState({
      email: '',
      image: '',
      firstName: '',
      LastName: '',
      userId: ''
    })
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form className="update-user-form" onSubmit={this.handleSubmit}>
            <label htmlFor="firstName"> First Name: </label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <label htmlFor="lastName"> Last Name: </label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />

            <label htmlFor="email"> Email: </label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="image"> ImageUrl: </label>
            <input
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   id: ownProps.id
// })

const mapDispatchToProps = dispatch => ({
  updateAccount: (update, userId) => dispatch(updateAccount(update, userId))
})

export default connect(mapDispatchToProps)(UpdateForm)
