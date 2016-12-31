//import imp files
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

//components

export default class MovieDetail extends React.Component {
  render() {
    const {infoBoxStyle, titleTextStyle, imageStyle, centerImageStyle, movieTypeTextStyle} = MovieDetailStyles;
    return (
      <Card>
        <CardItem>
          <View style={infoBoxStyle}>
            <View>
              <Text style={titleTextStyle}>{this.props.movie.Title}</Text>
              <Text>Year: {this.props.movie.Year}</Text>
            </View>
            <View>
              <Text style={movieTypeTextStyle}>{this.props.movie.Type}</Text>
            </View>
          </View>
          <View style={centerImageStyle}>
            <Image style={imageStyle} source={{uri: this.props.movie.Poster}} />
          </View>
        </CardItem>
      </Card>
    );
  }
}

const MovieDetailStyles = StyleSheet.create({
  titleTextStyle: {
    fontWeight: 'bold'
  },
  imageStyle: {
    height: 320,
    width: 320,
    borderRadius: 5,
    marginTop: 5
  },
  centerImageStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieTypeTextStyle: {
    backgroundColor: '#6AAFE6',
    color: '#FFFFFF',
    padding: 5,
    borderRadius: 5
  },
  infoBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
