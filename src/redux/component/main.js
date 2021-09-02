import './App.css';
import { Component} from 'react';
/* The connect function is a higher-order function that
 connects the Redux store to a React component.
  We'll pass a parameter called mapStateToProps to connect.
     This aptly named function will take any state from
       the Redux store and pass it to the props of the React component.
        We'll bring in loading, posts, and hasErrors from the Redux postsReducer */

import { connect } from 'react-redux';

/* bring action with dispatch  */
import {actionButtonDec,actionButtonInc } from './redux/actions/actions';
 
/* decrementCounter,incrementCounter :> working fine  */


class App extends Component{ 

  // state = {
  //   count : 0
  // }

  //  reducer = (state = this.state,action)=>{
  //   switch(action.type){
  //     case 'Increment' :  return {count:state.count+1};
  //     case 'Decrement' :  return {count:state.count-1};
  //     default:  return state;
  //   }
  // }





  render(){
    return (
      <div className="App">
          <h1>Test Redux</h1>
          <div className="Container">
            <div className="text">
            <h2>Counter : {this.props.count} </h2>
            </div>
            <div className="text">
            <input className="add" type="submit" value="Add" onClick={this.props.actionButtonInc }/>
            <input className="remove" type="submit" value="remove" onClick={this.props.actionButtonDec}/>
            </div>
          </div>
      </div>
    );
  }
 
}
/* when connect with redux the actions return to this.props  */


const mapStateToProps = (state) => ({
  count: state.counter.count,
});
// Connect Redux to React
export default connect(mapStateToProps,{actionButtonDec,actionButtonInc})(App);


/* The connect() function is one typical way to connect React to Redux.
         A connected component is sometimes referred to as a container.

 */