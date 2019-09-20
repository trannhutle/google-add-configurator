import { combineReducers } from "redux";

import keywords from "./keywords";
import sites from "./sites";
import settings from "./settings";
import loading from "./loading";

export default combineReducers({
  keywords,
  sites,
  settings,
  loading
});
