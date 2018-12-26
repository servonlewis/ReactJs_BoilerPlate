import types from "../Actions/Types";

export const SampleFunction = data => {
  return {
    type: types.TEMPLATE_TEST,
    data: {
      data
    }
  };
}; // end Sample

export const someDispatch = event => dispatch => {
  dispatch({
    type: types.SOMEDISPATCH,
    data: {
      event
    }
  });
};
