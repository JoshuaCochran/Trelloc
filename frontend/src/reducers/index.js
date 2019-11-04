import { combineReducers } from "redux";
import cardsReducer from "../features/cards/cardsSlice";
import boardsReducer from "../features/boards/boardsSlice";

export default combineReducers({
  cards: cardsReducer,
  boards: boardsReducer,
});
