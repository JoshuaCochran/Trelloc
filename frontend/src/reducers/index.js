import { combineReducers } from "redux";
import cardsReducer from "../features/cards/cardsSlice";
import listsReducer from "../features/lists/listsSlice";

export default combineReducers({
  cards: cardsReducer,
  lists: listsReducer,
});
