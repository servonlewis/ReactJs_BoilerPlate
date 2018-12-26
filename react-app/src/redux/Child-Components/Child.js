import React from "react";
import * as actions from "../Actions/actions";

export const FirstChild = props => {
  const { giveMeData, dispatch } = props;
  const { someDispatch } = actions;
  const { giveMedataSyle } = styles;

  return (
    <div>
      <button
        onClick={e => dispatch(someDispatch(giveMeData(e)))}
        style={giveMedataSyle}
      >
        Press Me! Then view my actions in Console.log
      </button>
    </div>
  );
};

const styles = {
  giveMedataSyle: {
    width: "15em",
    height: "5em",
    backgroundColor: "skyblue",
    color: "red",
    borderRadius: "5px"
  } // end giveMedataStyle
};
