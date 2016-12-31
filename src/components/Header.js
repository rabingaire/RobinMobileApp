//importing requred files

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Component

export default class Header extends React.Component {
  render() {
    const {texts, viewStyle} = HeaderStyles;
    return (
      <View style={viewStyle}>
        <Text style={texts}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const HeaderStyles = StyleSheet.create({
  texts: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333C4A',
    padding: 20,
    height: 50
  }
});
