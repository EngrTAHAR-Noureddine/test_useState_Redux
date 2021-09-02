import './App.css';
import { Component} from 'react';
import Add from './add';
import Remove from './remove';

class Main extends Component{ 
  state = {
    count : 0
  };
  
  // put setstate in parent and pass it to children as props 


  onAdd = () =>{
    let newVal  = this.state.count +1 ;
    this.setState({count:newVal});
  }
  
  onRemoveIt = ()=>{
    this.setState({count:this.state.count-1});
  }





  render(){
    return (
      <div className="App">
          <h1>Test Redux</h1>
          <div className="Container">
            <div className="text">
            <h2>Counter : {this.state.count}</h2>
            </div>
            <div className="text">
            <Add Increment = {this.onAdd}/>
            <Remove decrement = {this.onRemoveIt}/>
            </div>
          </div>
      </div>
    );
  }
 
}

export default Main;