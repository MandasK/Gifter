import React from "react";
import "./App.css";
import { PostProvider } from "./Providers/PostProvider";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostSear from "./Components/PostSearch";
import PostSearch from "./Components/PostSearch";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostSearch />
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
