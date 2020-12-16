import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Post from "./pages/feed/index";

import Routes from "./routes";

import Post2 from './components/CreatePost/index.js';
import PostProvider from "./contexts/PostProvider";

function App() {  
  return (
    <>
    <PostProvider>
      <Routes />
      <GlobalStyles/>
    </PostProvider>
    </>
  );
}

export default App;
