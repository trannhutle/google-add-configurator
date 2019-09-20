import { ADD_KEYWORD, DELETE_KEYWORD } from "../actions/keywords";
import { RECEIVE_DATA } from "../actions/shared";
export default function keywords(state = [], action) {
  switch (action.type) {
    case ADD_KEYWORD:
      console.log(action);
      return state.concat([action.keyword]);
    case DELETE_KEYWORD:
      return state.filter(kw => kw.id !== action.id);
    case RECEIVE_DATA:
      return action.keywords;
    default:
      return state;
  }
}
