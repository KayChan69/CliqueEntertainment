import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      comments: [ 'Keanu Chan + Josh Alome made this website but mostly Keanu tbh' ],
    };

    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      const target = event.target;
      const value = target.value;
      target.value = '';
      this.setState(state => ({ comments: [ ...state.comments, value ] }));
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Clique Entertainment</h1>
        <div className="row">
          <div className="col">
            <a href="https://www.youtube.com/watch?v=_BP5I95Zo7Q" target="_blank" rel="noopener noreferrer">FIRST VIDEO RELEASE!</a>
            <p>Hey friends check my friends video!</p>
            <a href="https://www.youtube.com/watch?v=LvUUX9OxkuU" target="_blank" rel="noopener noreferrer">SECOND VIDEO RELEASE</a>
            <p>Hey friends check my friends video!</p>
            <a href="http://www.youtube.com/channel/UCrxQm7_sxUdWT_HNr5gMO2g" target="_blank" rel="noopener noreferrer">YOUTUBE LINK</a>
            <p>hey guys subscribe</p>
            <img src="clique.png" alt="" className="clique"/>
            <h3>Comments:</h3>
            { this.state.comments.map(comment => (
            <div className="comment">{ comment }</div> )) }
            <h3>Enter comment:</h3>
            <input
              type="text"
              name="comment"
              id="comment"
              onKeyPress={this.onKeyPress}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
