import React, { Component } from 'react';
import Search from './components/Search'
import Images from './components/Images'
import API from './utils/API'
import './App.css';

class App extends Component {

  state = {
    searchParam: "",
    searchResults: [],
    imageSearched: false
  };

  handleInputChange = event => {

    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearchSubmit = event => {

    event.preventDefault();
    this.setState(
      {
        searchResults: []
      }
    )
    console.log("Search worked!")

    API.searchPhotos(this.state.searchParam)
      .then((json) => {

        for (let i = 0; i < json.results.length; i++) {
          var result = {
            id: json.results[i].id,
            alt: json.results[i].alt_description,
            url: json.results[i].urls.regular
          }

          this.state.searchResults.push(result)
          this.setState({
            imageSearched: true
          })
          console.log("result pushed to array")
        }
        console.log(this.state.searchResults)
      })
      .catch(err => console.log(err))
  };



  render() {
    return (
      <div className="App">
        <Search>
          <form className="search">
            <h2>Unplash Image Finder</h2>
            <input
              value={this.state.searchParam}
              name="searchParam"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search images"
            />
            <button onClick={this.handleSearchSubmit}>Search</button>
          </form>
        </Search>
        {
          this.state.searchResults.length > 0 && this.state.imageSearched === true ?
            this.state.searchResults.map(result => {
              return (
                <Images
                  key={result.id}
                  imgUrl={result.url}
                  alt={result.alt}
                >

                </Images>
              )
            })

            :
            <div></div>
            
        }



      </div>
    );
  }

}

export default App;
