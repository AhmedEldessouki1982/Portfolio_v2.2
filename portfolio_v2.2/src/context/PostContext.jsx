import { createContext, useReducer } from "react";

export const PostsContext = createContext();

let initPostState = {
    posts: [],
    error: "",
    loading: false,    
    }

let reducer = (postsState, action) => {
    switch (action.type) {
        case "POSTS_LOADING":
            return {...postsState, loading: true}
        case "POSTS_FAILURE":
            return {...postsState, error:action.error, loading: false, }
        case "POSTS_SUCCESS":
            return {...postsState, posts: action.posts, loading:false}
        default:
            throw new Error();
    }
}

export default function PostContext(props) {

    let [postsState, postsDispatch] = useReducer(reducer, initPostState);

    let globalPostsState = {
        postsState,
        postsDispatch
    };

  return (
    <PostsContext.Provider value={globalPostsState}>{props.children}</PostsContext.Provider>
  )
}