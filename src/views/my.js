import React, { Component } from 'react'

import Footer from '../compoents/footer'
import Mine from '../compoents/mine'
import Nav from '../compoents/nav'

const navData = {
  title: 'title'
}

class My extends Component {
  render () {
    return (
      <div>
        <Nav data={{ ...navData }} />
        <Mine />
        <Footer />
      </div>
    )
  }
}

export default My
