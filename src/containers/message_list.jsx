import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setFlats } from '../actions';

import Message from '../components/message';


class MessageList extends Component  {

  render(){
    return (

      <div className="flat-list col-sm-7">
        {this.props.messages.map((message) => <Message content={message.content} author={message.author} key= {message.created_at}/>)}
      {/*flat name should be an id, but for demonstration purposes it will be a name*/}
      </div>
      );
  }


};


  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators({ setFlats: setFlats }, dispatch );
  // }

  function mapStateToProps(state) {
    return {
      messages: state.messages
    };
  }


export default connect(mapStateToProps, null) (MessageList);
