import {DECREMENT_COUNTER,INCREMENT_COUNTER} from './types';

/*  u can use this for buttons click but prefer use dispatch  */
export const incrementCounter = () => ({ type: INCREMENT_COUNTER, payload: 1 });

export const decrementCounter = () => ({ type: DECREMENT_COUNTER, payload: 1 });



/* for buttons click */
export const actionButtonInc = () => (dispatch)=>{
    dispatch(incrementCounter());
};

export const actionButtonDec = ()=> (dispatch) =>{
    dispatch(decrementCounter());
};


/* An action sends data from your application to the Redux store.
 An action is conventionally an object with two properties: 
        type and (optional) payload.
        The type is generally an uppercase string (assigned to a constant)
             that describes the action.
        The payload is additional data that may be passed. 
        */