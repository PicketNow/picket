import React from 'react'
import {connect} from 'react-redux'
import {me} from '../../store/user'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {Grid, Typography, Card, CardMedia} from '@material-ui/core'
import RsvpEvents from './rsvpEvents'
import UserInterests from './userInterests'
import UserEvents from './userEvents'
import SimpleExpansionPanel from './expansionPanel'
import Jumbo from '../Jumbo'

class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }

  componentDidUpdate(userId) {
    if (userId.user.updatedAt !== this.props.user.updatedAt) this.props.me()
  }

  render() {
    const user = this.props.user
    const userId = this.props.user.id

    return (
      <React.Fragment>
        <Jumbo />

        <Container maxWidth="sm">
          <Typography component="div" spacing={2} style={{height: '100%'}}>
            <Grid
              className="user-page"
              container
              spacing={1}
              justify="space-between"
            >
              <Grid className="user-page-title" item xs={12}>
                <h2>{user.firstName}'s Account</h2>
                <br />
              </Grid>

              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={user.imageUrl}
                  />
                  <div key={user.id} className="user-props-container">
                    <div className="user-props-text">
                      Name: {user.firstName} {user.lastName} <br />
                      Email: {user.email} <br />
                    </div>
                  </div>
                </Card>
                <SimpleExpansionPanel
                  userId={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  image={user.imageUrl}
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4}>
                <UserInterests userId={userId} />
              </Grid>

              <Grid item xs={12}>
                <RsvpEvents userId={userId} />
              </Grid>
              <Grid item xs={12}>
                <UserEvents userId={userId} />
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
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
