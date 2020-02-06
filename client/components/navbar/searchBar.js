import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {searchByZip} from '../../store/event'
import Button from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

let defaultState = {
  searchText: '',
  submitted: false
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      searchText: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log('YOOO')
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('SUBMIIIIIT')
    // this.props.searchByZip(text)
    this.setState(defaultState)
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.search}>
        <InputBase
          placeholder="Search by Zip"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{'aria-label': 'search'}}
          onChange={this.handleChange}
        />

        <Button type="submit" onSubmit={this.handleSubmit} aria-label="search">
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </Button>
      </div>
    )
  }
}

export default SearchBar
