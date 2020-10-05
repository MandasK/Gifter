import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./Components/ApplicationViews";
import { PostProvider } from "./Providers/PostProvider";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostSearch from "./Components/PostSearch";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <Header />
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;
