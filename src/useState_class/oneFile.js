import './App.css';
import { Component} from 'react';

class OneFile extends Component{ // user this.state, this.setstate 
  
  constructor(){
    super();
    this.state = {
      count : 0
    };
    
  }

  onAdd = () =>{
    this.setState({count:this.state.count+1});
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
            <input className="add" type="submit" value="Add" onClick={this.onAdd}/>
            <input className="remove" type="submit" value="remove" onClick={this.onRemoveIt}/>
            </div>
          </div>
      </div>
    );
  }
 
}

export default OneFile;