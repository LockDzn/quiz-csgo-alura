import { HYDRATE } from 'next-redux-wrapper'
import { QUESTION_UPDATE } from '../../actions'

import db from '../../../../db.json'

const initialState = db.questions

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return state
    default:
      return state
  }
}

export default reducer