import { HYDRATE } from 'next-redux-wrapper'
import { OPTIONS_SELECTED_RESET, OPTIONS_SELECTED_UPDATE } from '../../actions'

const initialState = -1

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload
        case OPTIONS_SELECTED_UPDATE:
            const newState = action.payload
            return newState
        case OPTIONS_SELECTED_RESET:
            return -1
        default:
            return state
    }
}

export default reducer