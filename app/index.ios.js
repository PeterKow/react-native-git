/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;
import Main from './components/main'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})

var githubExample = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={ styles.container}
        initialRoute={{
        title: 'Github',
        component: Main
        }}/>
    );
  }
});

AppRegistry.registerComponent('githubExample', () => githubExample);
