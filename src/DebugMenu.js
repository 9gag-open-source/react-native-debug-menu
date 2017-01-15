// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  View,
  Button,
  Animated,
  PanResponder,
  TouchableOpacity,
  BackAndroid
} from 'react-native'

import type { DebugMenuType } from './type'
import styles from './styles'

class DebugMenu extends React.Component {
  props: DebugMenuType

  currentPanValue: any
  panResponder: PanResponder
  panListener: Function

  state: {
    showMenu: boolean,
    pan: Animated.ValueXY
  }

  constructor (props: DebugMenuType) {
    super(props)
    this.state = {
      showMenu: false,
      pan: new Animated.ValueXY()
    }

    this.currentPanValue = { x: 0, y: 0 }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: () => {
        this.state.pan.setOffset({x: this.currentPanValue.x, y: this.currentPanValue.y})
        this.state.pan.setValue({x: 0, y: 0})
      }
    })

    this.panListener = this.state.pan.addListener((value) => {
      this.currentPanValue = value
    })
  }

  _onBack = () => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false
      })
      return true
    } else {
      return false
    }
  }

  componentDidMount () {
    BackAndroid.addEventListener('debugMenuListener', this._onBack)
  }

  componentWillUnmount () {
    this.state.pan.removeListener(this.panListener)
    BackAndroid.removeEventListener('debugMenuListener', this._onBack)
  }

  _renderDraggable () {
    return (
      <View style={styles.draggableContainer}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle, {justifyContent: 'center', alignItems: 'center'}]}
        >
          <TouchableOpacity onPress={() => {
            this.setState({
              showMenu: true
            })
          }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Debug menu</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }

  _renderMenuItem (title: string, action: Function, index: number) {
    return (
      <View style={styles.menuItemStyle} key={`DebugItem-${index}`}>
        <Button onPress={() => action()} title={title} />
      </View>
    )
  }

  _renderDebugMenu () {
    return (
      <View style={styles.debugMenuContainer}>
        <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          {
            this.props.actionItems.map((menItem, index) => {
              return this._renderMenuItem(menItem.title, menItem.action, index)
            })
          }
        </ScrollView>
        <Button onPress={() => {
          this.setState({
            showMenu: false
          })
        }} title={'Close'} />
      </View>
    )
  }

  render () {
    if (this.state.showMenu) {
      return this._renderDebugMenu()
    } else {
      return this._renderDraggable()
    }
  }
}

export default DebugMenu
