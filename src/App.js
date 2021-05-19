import logo from './logo.svg';
import './App.css';
import React from "react";



class App extends React.Component {
  state = {
    fullName: "Sara",
    bio:"hdfjf kfkgfjur riuze",
    profession:"student",
    imge:<img src="imageInPublic.jpg" alt="react" />
  };
  handleClick=()=>this.setState({fullName:'yara'})
  render() {
    <button onClick={this.handleClick}> ClickMe</button>

    return <h1>hello {this.state.fullName},{this.state.bio},
            {this.state.profession},{this.state.imge}</h1>;
    
    
            
  }    
}
  


export default App;
