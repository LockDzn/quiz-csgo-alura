import { combineReducers } from 'redux'
import questionsReducer from './questions'
import resultsReducer from './results'
import selectedReducer from './options/selected'

export default combineReducers({
  results: resultsReducer,
  questions: questionsReducer,
  selected: selectedReducer,
})
