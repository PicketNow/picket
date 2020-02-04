import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import HomePage from './Pages/Homepage'
import AllEvents from './components/AllEvents'
import SingleEvent from './components/SingleEvent'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    // const {isLoggedIn} = this.props

    // <Switch>
    // {/* Routes placed here are available to all visitors */}
    // <Route path="/account" component={Account} />
    // <Route path="/cart/checkout/complete" component={CompletedOrder} />
    // {/* <Route path="/signup" component={Signup} /> */}
    // <Route
    //   exact
    //   path="/products/tag/:productTag"
    //   component={TaggedProducts}
    // />
    // <Route path="/products/update/:id" component={UpdateProduct} />
    // <Route path="/products/:id" component={SingleProduct} />
    // <Route path="/products/" component={AllProducts} />
    // <Route path="/cart/checkout" component={Checkout} />
    // <Route path="/cart" component={Cart} />
    // <Route path="/admin" component={AdminView} /> */}
    // <Route path="/about" component={About} />
    // <Route path="/contactUs" component={ContactUs} />
    // <Route path="/storeLocations" component={StoreLocations} />
    // <Route path="/storeHours" component={StoreHours} />
    // <Route path="/returns" component={Returns} />
    // <Route path="/" component={HomePage} />

    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={UserHome} />
        {/* <Route exact path="/events" component={AllEvents} /> */}
        <Route path="/events/:eventId" component={SingleEvent} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
  // isLoggedIn: PropTypes.bool.isRequired
}
