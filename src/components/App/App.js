import React, { Component } from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';



class App extends Component {

  componentDidMount() {
    this.getGiphy();
  }

  getGiphy = () => {
    this.props.dispatch({ type: 'FETCH_GIPHY'})
  }

  render() {

     
      
    return (
      <div>
        <h1>Giphy Search!</h1>
        
        <div>
         
        {this.props.reduxStore.setGiphy.map((item,i)=> <p key={item.id}> <img src = {item.images.fixed_height.url} alt= "Ryan Gosling"/></p>)}
        </div>
        
      </div>
    );
  }
  
}

const mapsToPropsState = (reduxStore) => ({
  reduxStore
})

export default connect(mapsToPropsState) (App);
