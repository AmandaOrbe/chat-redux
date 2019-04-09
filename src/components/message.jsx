import React, { Component } from 'react';

class Message extends Component  {


  render() {

    return (
      // WARNING!!!! STYLE MUST BE AN OBJECT!!!
      <div className="message" >
          <h3>{this.props.author}</h3>
          <p>{this.props.content}</p>
      </div>
    );
  }
};

export default Message;
