import React, { Component, ScrollView, Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import Badge from './badge'
import Separator from './utils/separator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5,
  },
  starts: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
})

export default class Repositories extends Component {
  openPage = (url) => {
    console.log('go to repor', url)
  };

  render() {
    const { userInfo, repos } = this.props
    const list = repos.map((item, index) => {
      const desc = item.description ? <Text style={styles.descriptions}>{ item.description} </Text> : <View/>
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
            onPress={this.openPage(item.html_url)}
            underlayColor='transparent'>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {item.stargazers_count}</Text>
            {desc}
          </View>
          <Separator/>
        </View>
      )
    })
    return (
      <ScrollView styles={styles.container}>
        <Badge userInfo={userInfo}/>
        { list }
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
}