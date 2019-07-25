import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';



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
      </div>
    );
  }
  
}

export default connect() (App);
