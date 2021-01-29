import { HYDRATE } from 'next-redux-wrapper'
import { RESULTS_UPDATE } from '../../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return [ ...state, action.payload ]
    case RESULTS_UPDATE:
      const newState = [...state, action.payload]
      
      return newState
    default:
      return state
  }
}

export default reducer