import React from 'react';

class AddMovie extends React.Component {
  addNewMovie(e) {
    e.preventDefault();
    let movie = {
      title: this.title.value,
      year: this.year.value,
      poster: this.poster.value,
      description: this.description.value
    };
    this.props.addMovie(movie);
  }
  render() {
    return (
      <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
        <p>Add Your Movie</p>
        <input ref={( input ) => this.title = input} type="text" placeholder="Title"/>
        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
         <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
         <textarea ref={ ( input ) => this.description = input} placeholder="Description">
         </textarea>
         <button type="submit">Add Movie</button>
      </form>
    )
  }
}

export default AddMovie;
