/*

Redux store or simply store is consider as a container for 
javascript apps. It stores the whole state of the app in an immutable object
tree

*/

// To make a store we have to import configureStore from "@reduxjs/toolkit" like the below:

import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counter/counterSlice";

// As soon as we import configureStore we export it as a store variable
// which contains an object that holds reducers .

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});
