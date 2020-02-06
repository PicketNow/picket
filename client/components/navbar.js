import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {fade, makeStyles} from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AllInterestsLink from './navbar/allInterestsLink'
import SearchIcon from '@material-ui/icons/Search'
import SearchBar from './navbar/searchBar'

// const Styled = styled.div`
//   .links: {
//     {
//       color: #c7ea46;
//       &:hover {
//         color: white;
//       }
//   }
//   `

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'green'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}))

const Navibar = ({handleClick, isLoggedIn}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/home"> Profile </Link>
      </MenuItem>
      <AllInterestsLink />
    </Menu>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to="/"> Picket</Link>
          </Typography>

          <SearchBar classes={classes} />

          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}

              <Button color="inherit">
                <Link to="/home"> Profile </Link>
              </Button>

              <Button color="inherit">
                <Link to="/" onClick={handleClick}>
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}

              <Button color="inherit">
                <Link to="/home">Login</Link>
              </Button>

              <Button color="inherit">
                <Link to="/home">Sign Up</Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navibar)

/**
 * PROP TYPES
 */
Navibar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
