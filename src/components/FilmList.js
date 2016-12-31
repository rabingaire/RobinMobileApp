//import require file
import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

//Component

export default class FilmList extends React.Component {

  constructor() {
    super();
    state = { movies: [] };
  }

  componentWillMount() {
    axios.get('http://www.omdbapi.com/?s=Batman').then(
      response => this.setState({movies: response.data.Search})
    );
  }

  renderMovies() {
    return this.state.movies.map( (movie) => {<Text>{movie.Title}</Text>});
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderMovies()}
      </View>
    );
  }
}
