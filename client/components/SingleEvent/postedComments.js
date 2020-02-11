import React from 'react'
import {connect} from 'react-redux'
import {getEventComments} from '../../store/event'
import {Grid, Typography, Card} from '@material-ui/core'

class PostedComments extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.getEventComments(this.props.eventId)
    console.log('HI', this.props)
  }

  componentDidUpdate(comments) {
    if (comments.comments.length !== this.props.comments.length) {
      this.props.getEventComments(this.props.eventId)
    }

    // this.props.getEventComments(this.props.eventId)
  }

  render() {
    const comments = this.props.comments

    return (
      <div className="comments-container">
        {comments && (
          <Grid container spacing={4}>
            {comments.map(comment => (
              <Grid item xs={4} key={comment.id}>
                <Card variant="outlined">
                  <div key={comment.id} className="comment-container">
                    <div className="comment-title">{comment.words}</div>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.events.eventComments
})

const mapDispatchToProps = dispatch => ({
  getEventComments: commentId => dispatch(getEventComments(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostedComments)
