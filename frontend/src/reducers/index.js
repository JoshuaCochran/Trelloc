import { combineReducers } from 'redux'
import cardsReducer from '../features/cards/cardsSlice'

export default combineReducers({
    cards: cardsReducer,
})