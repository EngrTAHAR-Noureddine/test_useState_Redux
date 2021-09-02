import './App.css';
import {useState} from 'react';
import Add from './add';
import Remove from './remove';

function Main (){ 
  const [count,setState] = useState(0);

  const onAdd = ()=>{
    setState(count+1);
  }
  const onRemoveIt = ()=>{
    setState(count-1);
  }

    return (
      <div className="App">
          <h1>Test Redux</h1>
          <div className="Container">
            <div className="text">
            <h2>Counter : {count}</h2>
            </div>
            <div className="text">
            <Add Increment = {onAdd}/>
            <Remove Decrement = {onRemoveIt}/>
            </div>
          </div>
      </div>
    );
 
 
}

export default Main;