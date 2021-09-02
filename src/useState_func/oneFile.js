import './App.css';
import {useState} from 'react';

function OneFile() { // in function use : useState from 'react'
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
          <input className="add" type="submit" value="Add" onClick={onAdd}/>
          <input className="remove" type="submit" value="remove" onClick={onRemoveIt}/>
          </div>
        </div>
    </div>
  );
}

export default OneFile;