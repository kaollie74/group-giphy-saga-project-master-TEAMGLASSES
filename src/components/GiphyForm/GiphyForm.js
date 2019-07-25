import React, { Component } from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';




class Giphy extends Component {

  state = {
    newGiphy: {
      searchValue: ''
    }
  }

handleChange = (event) =>{
  event.preventDefault()
  console.log(event.target.value);
    this.setState({
      newGiphy : {
        searchValue: event.target.value,
      }
    })

}

findGiphy = (event) => {
  console.log('IN FIND GIPHY');
  event.preventDefault();
 
   this.props.dispatch({type: 'FETCH_GIPHY', payload: this.state.newGiphy})
}


  render() {

     
      
    return (
      <div>
        <h1>Giphy Search!</h1>
        
       <form onSubmit={this.findGiphy}>
         <input type="text" onChange={this.handleChange}/>
         <button onClick = {this.findGiphy}>Search</button>

       </form>
        
      </div>
    );
  }
  
}

export default connect()(Giphy)