import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  render () {
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
            <Icon key='1' type='ellipsis' />
          ]}
          style={{
            backgroundColor: '#8CD1D4'
          }}
        >{this.props.title}</NavBar>

        {/* <NavBar
          mode='dark'
          leftContent='Back'
          rightContent={[
            <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
            <Icon key='1' type='ellipsis' />
          ]}
        >NavBar</NavBar> */}
      </div>
    )
  }
}

export default Nav
