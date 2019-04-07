import React, { Component } from 'react';
import ArticleList from "./component/articleList";
import {DATA} from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
            <ArticleList articles={DATA}/>
      </div>
    );
  }
}

export default App;
