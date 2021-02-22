import React, { Component } from 'react'
import Person from "./profile/Person";







class App extends Component {


  constructor() {
    super()
    this.state = {
      show: false
    };   
    this.state = {
      digit:0,
    };
  }

  operation(){
    this.setState({
      show:!this.state.show
    })
  }

  componentDidMount = () => {
    setInterval(() => {
   this.setState(prevState => ({
  digit: prevState.digit + 1,
}));
    },1000)
  };

  render() {
    return (

      <div>
        <button onClick={() => this.operation()}>click to show</button>
       <div> couunter = {this.state.digit}</div>
  
          {
            this.state.show?
            <div>
              <Person/>
              </div>  
            :null
          }
      </div>
    )
  }
}

export default App
