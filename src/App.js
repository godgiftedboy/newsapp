import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0,
  }
  setProgress=(progress)=>{

    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

          <Navbar />
          <Routes>
            <Route exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" country="us" />}
            />
            <Route exact
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business" country="us" />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment" country="us" />
              }
            />
            <Route exact
              path="/general"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" country="us" />}
            />
            <Route exact
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health" country="us" />}
            />
            <Route exact
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science" country="us" />}
            />
            <Route exact
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports" country="us" />}
            />
            <Route exact
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology" country="us" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
