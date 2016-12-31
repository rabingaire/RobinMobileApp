//import imp files
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


//components
export default class Card extends React.Component {
  render() {
    const {containerStyle} = styles;
    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginTop: 10,
    padding: 20
  }
});
