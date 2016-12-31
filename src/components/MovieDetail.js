//import imp files
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

//components

export default class MovieDetail extends React.Component {
  render() {
    const {titleTextStyle, imageStyle, centerElementStyle} = MovieDetailStyles;
    return (
      <View style={centerElementStyle}>
        <Card>
          <CardItem>
            <Text style={titleTextStyle}>{this.props.movie.Title}</Text>
            <Text>Year: {this.props.movie.Year}</Text>
            <Image style={imageStyle} source={{uri: this.props.movie.Poster}} />
          </CardItem>
        </Card>
      </View>
    );
  }
}

const MovieDetailStyles = StyleSheet.create({
  titleTextStyle: {
    fontWeight: 'bold'
  },
  imageStyle: {
    height: 300,
    width: 300,
    borderRadius: 5
  },
  centerElementStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
