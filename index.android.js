//importing the required files
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import FilmList from './src/components/FilmList';

//Component
export default class MyApp extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Robin'} />
        <FilmList />
      </View>
    )
  }
};

//rendering the code to device
AppRegistry.registerComponent( 'Robin', ()=> MyApp)
