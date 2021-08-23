import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    //console.log(term);
    axios.get('https://api.unsplash.com/search/photos',{
      params: {
        query: term
      },
      headers:{
        Authorization: 'Client-ID b8CnbFIPVn-LDyLjtjbCpoMgtNDtBBFwp_NIHprR3uQ'
      }

    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
