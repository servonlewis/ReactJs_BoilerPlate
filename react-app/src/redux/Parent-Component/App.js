import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/actions";
import { FirstChild } from "../Child-Components/Child";
import { Map, List, fromJS } from "immutable";

class App extends Component {
  componentDidMount(props) {
    this.props.dispatch(actions.SampleFunction("some-data"));

    console.log(
      fromJS({ some: "data", data: "some", nest: { nesteddata: "me" } })
        .concat({ me: "data" })
        .get("nest")
        .get("nesteddata")
    );

    const someList = List([5, 4, 3, 2, 1])
      .push(5)
      .pop();

    console.log(someList.toJS().map(x => x + 2));
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
    event: state.appReducer.event,
    config: state.appReducer.config,
    endpoint: state.appReducer.endpoint
  };
};
export default connect(mapStateToProps)(App);
