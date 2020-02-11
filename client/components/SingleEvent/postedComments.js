import React from 'react'
import {connect} from 'react-redux'
import {getEventComments} from '../../store/event'
import {Grid, Card} from '@material-ui/core'
import CommentCard from './commentCard'

class PostedComments extends React.Component {
  async componentDidMount() {
    await this.props.getEventComments(this.props.eventId)
  }

  componentDidUpdate(comments) {
    if (comments.comments.length !== this.props.comments.length) {
      this.props.getEventComments(this.props.eventId)
    }
  }

  render() {
    const comments = this.props.comments.reverse()

    return (
      <div className="comments-container">
        {comments && (
          <Grid container spacing={12}>
            {comments.map(comment => (
              <Grid
                key={comment.id}
                className="each-card"
                container
                spacing={12}
              >
                <CommentCard comment={comment} />
              </Grid>

              // <Grid item xs={4} key={comment.id}>
              //   <Card variant="outlined">
              //     <div key={comment.id} className="comment-container">
              //       <div className="comment-title">{comment.words}</div>
              //     </div>
              //   </Card>
              // </Grid>
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
