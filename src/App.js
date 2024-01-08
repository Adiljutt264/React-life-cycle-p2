import './App.css';
import React from "react";
//import Gender from './Components/Gender';
import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from './Components/About';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){ // This method is called after the below method is mounted equivlant to useEffect (UseEffect is based on this just sythetic sugar nothing else)
   // setTimeout(() => {
      console.log("Fetched")
   // }, 2000);
  }
  componentDidUpdate(){ // Updates when component is updated and it runs again
    console.log("Updated")
  }
  shouldComponentUpdate(){ //stops rerendering and blocks componentDidUpdate (states changes but UI doesnot)
    return false;
  }
  componentWillUnmount(){
    console.log("Unmounting") // Unmounts the component usefull when we want to remove an event handler after it is not required
  }
  increment(){
    this.setState((prev)=>{
      return{
        count: prev.count + 1,
      }
    })
  }
  handleChange(e){
    this.setState({
      name: e.target.value,
    })
  }
  render(){
    return (
      <Router> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </Router>
      
    );
}
}

export default App;

  /*  <div className="app">
    <h2>{this.state.count}</h2>
    <button onClick={this.increment}>+</button>
    <input type={"text"} placeholder='Enter Your name' value={this.state.name} onChange={this.handleChange}></input>
      <p>{this.state.name}</p>
      <Gender gender="male"/> this is correct because we are passing string
      <Gender gender= {9}/> this is worng because it is not a string and we are expecting string 
      <Gender gender= "Male"/>
      </div> */