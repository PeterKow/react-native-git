import React, { View, StyleSheet, Component } from 'react-native'

export default class Separator extends Component{
  render() {
    return (
      <View style={styles.separator}></View>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15,
  }
})
