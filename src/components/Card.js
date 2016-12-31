//import imp files
import React from 'react';
import { View, StyleSheet } from 'react-native';


//components
export default class Card extends React.Component {
  render() {
    const {containerStyle} = CardStyles;

    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

const CardStyles = StyleSheet.create({
  containerStyle : {
    borderWidth: 1,
    borderColor: '#8EC0E4',
    borderRadius: 2,
    padding: 10,
    margin: 10
  }
});
