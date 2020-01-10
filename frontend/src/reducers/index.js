import { combineReducers } from "redux";
import cardsReducer from "../features/cards/cardsSlice";
import listsReducer from "../features/lists/listsSlice";
import boardsReducer from "../features/boards/boardsSlice";
import userReducer from "../features/user/userSlice";

export default combineReducers({
  cards: cardsReducer,
  lists: listsReducer,
  boards: boardsReducer,
  userReducer
});
