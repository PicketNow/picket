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
import ButtonBase from '@material-ui/core/ButtonBase'

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

        <Container maxWidth="md">
          <Typography component="Grid" spacing={1} style={{height: '100%'}}>
            <Grid
              className="user-page"
              container
              spacing={1}
              direction="column"
            >
              <Grid container direction="row" justify="center" xs={12}>
                <Grid>
                  <h1>{user.firstName}'s Account</h1>
                  <br />
                </Grid>
              </Grid>
              <Grid>
                <Grid container justify="center" xs={12}>
                  <Grid item sm={6} xs={12}>
                    <ButtonBase>
                      <img
                        className="profile-image"
                        alt="complex"
                        src={user.imageUrl}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid
                    container
                    alignItems="flex-start"
                    justify="flex-start"
                    sm={6}
                    xs={12}
                  >
                    <Grid sm={12} xs={12} key={user.id}>
                      <Grid className="user-props-text">
                        <strong>Name:</strong>{' '}
                        <i>
                          {user.firstName} {user.lastName}
                        </i>{' '}
                        <br />
                        <strong>Email:</strong> <i>{user.email}</i> <br />
                      </Grid>
                    </Grid>

                    <Grid sm={7}>
                      <SimpleExpansionPanel
                        userId={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        image={user.imageUrl}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container direction="row">
                  <Grid item xs={12}>
                    <br /> <br /> <br />
                    <UserInterests userId={userId} /> <br />
                  </Grid>
                  <Grid item xs={6}>
                    <RsvpEvents userId={userId} />
                  </Grid>
                  <Grid item xs={6}>
                    <UserEvents userId={userId} />
                  </Grid>
                </Grid>
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
