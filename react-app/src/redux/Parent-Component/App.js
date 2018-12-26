import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/actions";
import { FirstChild } from "../Child-Components/Child";

class App extends Component {
  componentDidMount(props) {
    this.props.dispatch(actions.SampleFunction("some-data"));
  }

  giveMeData = data => data;

  render() {
    return (
      <div className="App">
        <FirstChild
          {...this.props}
          giveMeData={this.giveMeData}
          dispatch={this.props.dispatch}
        />
      </div>
    ); // end Return
  } // end Render
} // end App

const mapStateToProps = state => {
  return {
    me: state.appReducer.me,
    event: state.appReducer.event
  };
};
export default connect(mapStateToProps)(App);
