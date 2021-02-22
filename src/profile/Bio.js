import React, { Component } from 'react'

 class Bio extends Component {
     state = {
         award1 :"a Primetime Emmy Award",
         award2 : " a Golden Globe Award"
     }
    render() {
        return (
            <div>
                <h2>an American actress</h2> 
                <h3>the recipient of several accolades, including {this.state.award1} and {this.state.award2} </h3> 
            </div>
        )
    }
}

export default Bio
