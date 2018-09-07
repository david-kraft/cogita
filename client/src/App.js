import React, { Component } from "react";
import NavBar from "./components/NavBar";
import PostsPage from "./components/PostsPage";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <PostsPage />
      </div>
    );
  }
}

export default App;