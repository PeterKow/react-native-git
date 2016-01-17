import React from 'react-native'
import Profile from './profile'
const { Text, View, Component, StyleSheet, Image, TouchableHighlight } = React

export default class Dashboard extends Component {
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC'
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE'
    } else {
      obj.backgroundColor = '#75bBF4'
    }

    return obj
  }

  goToProfile = () => {
    const { userInfo } = this.props
    console.log('got to profile')
    this.props.navigator.push({
      title: userInfo.name || 'Select an Option',
      component: Profile,
      passProps: { userInfo }
    })
  };

  goToRepo = () => {
    console.log('got to repo')
  };

  goToNotes = () => {
    console.log('got to notes')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Git profile</Text>
        <Image source={{ uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>View profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepo}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>View repo</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>View notes</Text>
        </TouchableHighlight>
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