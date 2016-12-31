//import imp files
import React from 'react';
import {Text} from 'react-native'


//components

export default class MovieDetail extends React.Component {
  render() {
    return (
      <Text>{this.props.movie.Title}</Text>
    );
  }
}
