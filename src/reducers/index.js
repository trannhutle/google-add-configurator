import { combineReducers } from "redux";

import keywords from "./keywords";
import sites from "./sites";

export default combineReducers({
  keywords,
  sites
});
