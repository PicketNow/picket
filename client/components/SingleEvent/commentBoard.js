import React from 'react'
import {connect} from 'react-redux'
import {getEventComments, commentOnEvent} from '../../store/event'
import PostedComments from './postedComments'

class CommentBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.props.getEventComments(this.props.eventId)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const info = Object.assign({}, this.state)
    info.userId = this.props.userId
    info.eventId = Number(this.props.eventId)
    await this.props.commentOnEvent(info)
    this.setState({
      words: ''
    })
  }

  render() {
    const comments = this.props.comments
    const eventId = this.props.eventId

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="words"> Comment: </label>
          <input
            name="words"
            type="text"
            value={this.state.words}
            onChange={this.handleChange}
          />

          <button className="buttons" type="submit">
            Comment
          </button>
        </form>

        <PostedComments
          comments={comments}
          eventId={eventId}
          user={this.props.user}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.events.eventComments
})

const mapDispatchToProps = dispatch => ({
  getEventComments: eventId => dispatch(getEventComments(eventId)),
  commentOnEvent: info => dispatch(commentOnEvent(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBoard)
