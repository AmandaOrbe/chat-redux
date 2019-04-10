import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class Input extends Component  {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = () => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser,  this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"  className="input" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit"  className="button"/>
      </form>
    );
  }
};


function mapStateToProps(state) {
// console.log(state)
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);


//***************************************


