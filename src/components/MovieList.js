//import require file
import React from 'react';
import { View } from 'react-native';
import MovieDetail from './MovieDetail';
import axios from 'axios';

//Component

export default class MovieList extends React.Component {


  state = { movies: [] };

  componentWillMount() {
    axios.get('http://www.omdbapi.com/?s=Batman').then(
      response => this.setState({ movies: response.data.Search})
    );
  }

  renderMovies() {
    return this.state.movies.map(movie =>
      <MovieDetail key={movie.imdbID} movie={movie} />
    );
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
