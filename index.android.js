//importing the required files
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

//Component
export default class MyApp extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Robin'} />
        <MovieList />
      </View>
    )
  }
};

//rendering the code to device
AppRegistry.registerComponent( 'Robin', ()=> MyApp)
