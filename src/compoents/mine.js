import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item

class Mine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  render () {
    return (
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '220px',
          width: '100%',
          background: 'url(../images/background-icon.png) center center /  auto 300px no-repeat'
        }}>
          <div style={{
            height: '60px',
            width: '60px'
          }}>
            <img src='../images/wu.png' style={{
              height: '60px',
              width: '60px',
              borderRadius: '50%'
            }} />
          </div>
          <div style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: '24px'
          }}>
          JianJin Wu
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: '24px',
            opacity: 0.7
          }}>
          连续记账36天
          </div>
        </div>
        <List renderHeader={() => ''}>
          <Item
            thumb='../images/clock-icon.png'
            arrow='horizontal'
            onClick={() => {}}
          >
          定时提醒
          </Item>
          <Item
            thumb='../images/edit-icon.png'
            onClick={() => {}}
            arrow='horizontal'
          >
          支出/收入类别编辑
          </Item>
        </List>
        <List renderHeader={() => ''}>
          <Item
            thumb='../images/message-icon.png'
            onClick={() => {}}
            arrow='horizontal'
          >
          消息
          </Item>
          <Item
            thumb='../images/about-icon.png'
            onClick={() => {}}
            arrow='horizontal'
          >
          关于我们
          </Item>
          <Item
            thumb='../images/help-icon.png'
            onClick={() => {}}
            arrow='horizontal'
          >
          帮助
          </Item>
        </List>
      </div>
    )
  }
}

export default Mine
