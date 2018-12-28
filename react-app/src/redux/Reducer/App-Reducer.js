import types from "../Actions/Types";

const defaultState = {
  me: "test",
  event: "",
  config: {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
  },
  endpoint: "IPADDRESS:4000"
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
