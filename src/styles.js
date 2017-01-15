// @flow
import {
  StyleSheet,
  Dimensions
} from 'react-native'

const Window = Dimensions.get('window')
const CIRCLE_RADIUS = 30

export default StyleSheet.create({
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: '#E91E63'
  },

  draggableContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0
  },

  debugMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Window.width,
    height: Window.height - 48,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },

  menuItemStyle: {
    marginVertical: 8
  }
})