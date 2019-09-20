import { ADD_SITE, DELETE_SITE } from "../actions/sites";
import { RECEIVE_DATA } from "../actions/shared";
import { conditionalExpression } from "@babel/types";

export default function Sites(state = [], action) {
  switch (action.type) {
    case ADD_SITE:
      console.log("This is site: ", [action.site])
      return state.concat([action.site]);
    case DELETE_SITE:
      return state.filter(site => site.id !== action.id);
    case RECEIVE_DATA:
      return action.sites;
    default:
      return state;
  }
}
