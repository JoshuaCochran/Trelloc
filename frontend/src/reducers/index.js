import { combineReducers } from "redux";
import cardsReducer from "../features/cards/cardsSlice";
import listsReducer from "../features/lists/listsSlice";
import boardsReducer from "../features/boards/boardsSlice";

export default combineReducers({
  cards: cardsReducer,
  lists: listsReducer,
  boards: boardsReducer
});
