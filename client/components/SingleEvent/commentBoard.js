import React from 'react'
import {render} from 'enzyme'
import {getEventComments, commentOnEvent} from '../../store/event'

class CommentBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
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
    info.eventId = this.props.eventId
    await this.props.commentOnEvent(info)
    this.setState({
      inputText: ''
    })
  }

  render() {
    return <div />
  }
}

const mapDispatchToProps = dispatch => ({
  getEventComments: eventId => dispatch(getEventComments(eventId)),
  commentOnEvent: info => dispatch(commentOnEvent(info))
})

export default connect(undefined, mapDispatchToProps)(CommentBoard)
