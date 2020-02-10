import React from 'react'
import {updateAccount} from '../../store/user'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.email,
      imageUrl: this.props.image,
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
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.updateAccount(this.state, this.props.userId)
    this.setState({
      email: '',
      imageUrl: '',
      firstName: '',
      lastName: '',
      userId: ''
    })
  }

  render() {
    return (
      <React.Fragment>
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
              <label htmlFor="imageUrl"> ImageUrl: </label>
              <input
                name="imageUrl"
                type="text"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
              <button className="buttons" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   id: ownProps.id
// })

const mapDispatchToProps = dispatch => ({
  updateAccount: (update, userId) => dispatch(updateAccount(update, userId))
})

export default connect(undefined, mapDispatchToProps)(UpdateForm)
