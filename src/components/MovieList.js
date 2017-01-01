//import require file
import React from 'react';
import { ScrollView, TextInput, StyleSheet } from 'react-native';
import MovieDetail from './MovieDetail';
import axios from 'axios';

//Component

export default class MovieList extends React.Component {


  state = { movies: [] };

  apiCall(event) {
    axios.get(`http://www.omdbapi.com/?s=${event.nativeEvent.text}`).then(
      response => this.setState({movies: response.data.Search})
    );
  }

  renderMovies() {
    return this.state.movies.map(movie =>
      <MovieDetail key={movie.imdbID} movie={movie} />
    );
  }

  render() {
    console.log(this.state);
    const {TextInputStyle} = MovieListStyles;
    return (
      <ScrollView>
        <TextInput
          style={TextInputStyle}
          onSubmitEditing={(event) => this.apiCall(event)}
          returnKeyType='search'
          placeholder="Search movie/series..."/>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}

const MovieListStyles = StyleSheet.create({
  TextInputStyle: {
    margin:10
  }
});
