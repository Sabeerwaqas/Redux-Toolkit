/*
    Redux store and redux are kind of use interchangeably
    both stand for container for JavaScript apps. It stores
    the whole state of the app an immutable object tree and really
    the intended pattern for redux is just to have a single store
    for your application multiple stores are possible but that is
    not what is recommended by the creators of reduxt.  

*/

// To make a store, we have to import configureStore from "@reduxjs/toolkit"

import { configureStore } from "@reduxjs/toolkit";

/*

    In the Redux Toolkit, configureStore is a function that helps simplify the
    process of creating a Redux store with common configurations. It is part of
    the toolkit's efforts to streamline the Redux setup and reduce boilerplate code.

*/

export const store = configureStore({
  /*
    

    In the context of Redux, a reducer is a pure function that takes the current state
    and an action as arguments and returns the new state. The primary responsibility of
    a reducer is to specify how the application's state changes in response to different
    actions.

    */

  reducer: {},
});
