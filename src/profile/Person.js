import React, { Component } from 'react';
import Bio from './Bio';
import NavBar from './NavBar';


class Person extends Component {
    state = {
        FirstName: "Sara",
        LastName: "paulson"
      };
    render() {
        return (
            <div>
                < NavBar/>
                <h1>{this.state.FirstName} {this.state.LastName}</h1>;
                <img src="/img/sarah.jpg" alt ="profile pic"/>
                < Bio/>
            </div>
        )
    }
}

export default Person
