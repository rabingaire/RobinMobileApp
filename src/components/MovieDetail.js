//import imp files
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';


//components

export default class MovieDetail extends React.Component {
  render() {
    return (
      <Card>
        <Text>{this.props.movie.Title}</Text>
      </Card>
    );
  }
}
