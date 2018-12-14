import types from '../Actions/Types'

const defaultState = {
    me: 'test'
}

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.TEMPLATE_TEST:
            return {
                ...state,
                data: action.data.data
            } // end return

        default:
            break;
    } // end switch
} // end reducer

export default appReducer