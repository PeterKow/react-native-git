/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import Main from './app/components/main'
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var githubExample = React.createClass({
  render: function () {
    return (
      <Navigator initialRoute={{ name: 'helo', index: 0 }}
                 renderScene={(route, navigator) =>
                <Main name={ route.name }
                onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        />

  }/>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubExample', () => githubExample);

//<View style={styles.container}>
//  <Text style={styles.welcome}>
//    Welcome to React Native!
//  </Text>
//  <Text style={styles.instructions}>
//    To get started, edit index.android.js
//  </Text>
//  <Text style={styles.instructions}>
//    Shake or press menu button for dev menu
//  </Text>
//</View>