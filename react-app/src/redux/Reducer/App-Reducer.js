import types from "../Actions/Types";

const defaultState = {
  me: "test",
  event: ""
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.TEMPLATE_TEST:
      return {
        ...state,
        data: action.data.data
      }; // end return
    case types.SOMEDISPATCH:
      return {
        ...state,
        data: action.data.event
      };
    default:
      return { ...state };
      break;
  } // end switch
}; // end reducer

export default appReducer;
