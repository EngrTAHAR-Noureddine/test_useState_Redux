import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

//const initialState = {};
//const middleware = [thunk];


const store = createStore(
    rootReducer,
   /* initialState,*/
   composeWithDevTools(applyMiddleware(thunk))
    );

export default store;

/*  The Redux application state lives in the store,
     which is initialized with a reducer.
         When used with React, a <Provider> exists to wrap the application,
             and anything within the Provider can have access to Redux. */

/*  createStore: to create the store that will maintain the Redux state
    applyMiddleware: to be able to use middleware, in this case thunk
    Provider: to wrap the entire application in Redux
    thunk: a middleware that allows us to make asynchronous actions in Redux
    composeWithDevTools: code that connects your app to Redux DevTools */             