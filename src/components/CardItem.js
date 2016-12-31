//importing imp files
import React from 'react';
import { View, StyleSheet } from 'react-native';

//components
export default class CardItem extends React.Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}
