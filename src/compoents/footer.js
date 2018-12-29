import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
// import PropTypes from 'prop-types'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'account',
      hidden: false,
      fullScreen: true
    }
  }

  renderContent (pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.setState({
              hidden: !this.state.hidden
            })
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.setState({
              fullScreen: !this.state.fullScreen
            })
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    )
  }

  render () {
    return (
      <div style={{ position: 'fixed', height: '60px', width: '100%', bottom: 0, zIndex: 1000 }}>
        <TabBar
          unselectedTintColor='#666666'
          tintColor='#8CD1D4'
          barTintColor='#FFFFFF'
          hidden={this.state.hidden}
          tabBarPosition='bottom'
        >
          <TabBar.Item
            title='账单'
            key='account'
            icon={<div style={{
              width: '24px',
              height: '24px',
              background: 'url(../images/bill-icon.png) center center /  24px 24px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '24px',
              height: '24px',
              background: 'url(../images/bill-active-icon.png) center center /  24px 24px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'account'}
            onPress={() => {
              this.setState({
                selectedTab: 'account'
              })
            }}
            data-seed='logId'
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            title='钱包'
            key='wallet'
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: 'url(../images/wallet-icon.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: 'url(../images/wallet-active-icon.png) center center /  24px 24px no-repeat' }}
              />
            }
            selected={this.state.selectedTab === 'wallet'}
            onPress={() => {
              this.setState({
                selectedTab: 'wallet'
              })
            }}
            data-seed='logId1'
          >
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            key='new'
            icon={
              <div style={{
                width: '55px',
                height: '55px',
                marginBottom: '6px',
                zIndex: 1001,
                background: 'url(../images/new-icon.png) center center /  55px 55px no-repeat' }}
              />
            }
          >
          </TabBar.Item>
          <TabBar.Item
            title='图表'
            key='form'
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: 'url(../images/form-icon.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: 'url(../images/form-active-icon.png) center center /  24px 24px no-repeat' }}
              />
            }
            selected={this.state.selectedTab === 'form'}
            onPress={() => {
              this.setState({
                selectedTab: 'form'
              })
            }}
          >
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            title='我的'
            key='my'
            icon={{ uri: '../images/my-icon.png' }}
            selectedIcon={{ uri: '../images/my-active-icon.png' }}
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my'
              })
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

// Footer.propTypes = {
//   selectedTab: PropTypes.string
// }

export default Footer
