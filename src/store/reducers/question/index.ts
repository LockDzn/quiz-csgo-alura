import { HYDRATE } from 'next-redux-wrapper'
import { QUESTION_UPDATE } from '../../actions'

import db from '../../../../db.json'

const initialState = db.questions[0]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return db.questions[action.payload]
    case QUESTION_UPDATE:
      const newState = db.questions[action.payload]
      return newState
    default:
      return state
  }
}

export default reducer