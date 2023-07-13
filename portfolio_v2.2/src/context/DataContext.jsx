import React from 'react';
export const Context = React.createContext();

let initUserState = {
    user: {error: true},
    error: "",
    loading: false,    
    }

let reducer = (userState, action) => {
    switch (action.type) {
        case "DATA_LOADING":
            return {...userState, loading: true}
        case "DATA_FAILURE":
            return {...userState,error:action.error, loading: false, }
        case "DATA_SUCCESS":
            return {...userState,user: action.user, loading:false}
        default:
            throw new Error();
    }
}

export default function DataContext(props) {

    let [userState, dispatch] = React.useReducer(reducer, initUserState);

    let globalUserState = {
        userState,
        dispatch
    };

  return (
    <Context.Provider value={globalUserState}>{props.children}</Context.Provider>
  )
}