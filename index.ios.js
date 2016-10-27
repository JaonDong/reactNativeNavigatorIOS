/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import MyScene from './MyScene';

/*--  首页页面组件 --*/
var HomeScene = React.createClass({
  render: function() {
    return (
      <View style={styles.home}>
        <TouchableHighlight onPress={this.onPress}>
          <Text>push me!</Text>
        </TouchableHighlight>
      </View>
    );
  },
  onPress: function() {
    this.props.navigator.push({
      title: 'touch View',
      component: SecondScene,
      passProps: { myProp: 'Axiba001' },
    });
  }

});
/*--  push后的页面组件 --*/
var SecondScene = React.createClass({
  render: function() {
    return (
      <View style={styles.home}>
        <Text>push sucess!{'hi,this is prams:'+ this.props.myProp}</Text>
      </View>
    );
  },
});

export default class AwesomeProject extends Component {
  _onPressButton() {
    console.debug("You tapped the button!");
  }
   _onRightButtonPress(){
     console.log("You tapped the button!");
    this.refs.nav.push({
      title: 'push view',
      component: SecondScene,
    });
  }
  render() {
    return (
       <NavigatorIOS
         ref='nav'
        initialRoute={{
          component: HomeScene,
          title: 'My Initial Scene',
          rightButtonTitle: 'more',
          passProps: { myProp: 'SecondScene' },
          onRightButtonPress:()=>{
            this.refs.nav.push(
              {
                title:'ssss',
                component:SecondScene,
                
              });
          }
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
