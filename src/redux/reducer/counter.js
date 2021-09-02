import {DECREMENT_COUNTER,INCREMENT_COUNTER} from '../actions/types';

const initialState = {
    count:0
  }
  
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
             ...state,
             count: state.count + action.payload,
            };
        case DECREMENT_COUNTER:
            return {
              ...state,
              count: state.count - action.payload,
            };  
        default:
            return state;
    }
  }

  /* A reducer is a function that takes two parameters:
     state and action.
     A reducer is immutable and always returns a copy of the entire state.
      A reducer typically consists of a switch statement that goes through
         all the possible action types. */