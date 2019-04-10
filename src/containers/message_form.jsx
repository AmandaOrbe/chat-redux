import React, { Component } from 'react';
import Input from '../components/input';
import Button from '../components/button';

class MessageForm extends Component  {


  render() {

    return (
      // WARNING!!!! STYLE MUST BE AN OBJECT!!!
      <div className="message-form" >
          <Input />
          {/*<Button />*/}
      </div>
    );
  }
};

export default MessageForm;
