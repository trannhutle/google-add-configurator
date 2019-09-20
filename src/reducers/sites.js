import { ADD_SITE, DELETE_SITE } from "../actions/sites";
import { RECEIVE_DATA } from "../actions/shared";

export default function Sites(state = [], action) {
  switch (action.type) {
    case ADD_SITE:
      return state.concat([action.site]);
    case DELETE_SITE:
      return state.filter(site => site.id !== action.id);
    case RECEIVE_DATA:
      return action.sites;
    default:
      return state;
  }
}
