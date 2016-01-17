import React from 'react-native'
const { Text, View, Component, StyleSheet } = React

export default class Dashboard extends Component {
  render() {
    console.log('ddd', this.props.userInfo)
    return (
      <View style={styles.container}>
        <Text>This is dashboard</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})