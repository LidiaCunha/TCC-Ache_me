import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext)
} 

function PostProvider({children}) {

    const [post, setPost] = React.useState([]);

  return (
      <PostContext.Provider value={{post, setPost}} >
          {children}
      </PostContext.Provider>
  );
}

export default PostProvider;