/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  Text,
  View
} from 'react-native';

export default class T1 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>
            Eric & Kelly 婚禮邀請單
          </Text>
        </View>
        <TextInput style={styles.textinput} editable = {true} maxLengh ={200}
            onChangeText = {(text) => this.setState({text})}
            value={this.state.text}
        />
        <Text style={styles.note}>
          如填完表單但要修改出席內容，再麻煩主動告知喔!{'\n'}感謝。
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 5,
    width:width,
    height: 100,
    alignItems:'center',
  },
  text: {
    fontSize:20,
    fontWeight:'bold',
  },
  textarea: {
    flex: 1,
  },
  textinput: {
    height: width,
    width: height,
    marginTop: -50,
    borderColor: 'black',
    marginLeft:5,
    marginRight:5, 
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  note: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


AppRegistry.registerComponent('T1', () => T1);
