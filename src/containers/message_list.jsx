import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component  {

  componentWillMount(){
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render(){
    return (

      <div className="message-list col-sm-7">
        {this.props.messages.map((message) => <Message content={message.content} author={message.author} key= {message.created_at}/>)}
        <MessageForm />
      </div>
      );
  }


};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (MessageList);
