import React from 'react'
import Jumbo from '../components/Jumbo.js'
import CategorySearch from '../components/searchComps/categorySearch'
import ZipSearch from '../components/searchComps/zipSearch'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <Jumbo />

        <CategorySearch />
        <br />
        <ZipSearch />
      </React.Fragment>
    )
  }
}

export default SearchPage
