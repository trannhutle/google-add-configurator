import {
  TOGGLE_SERVICE,
  SETTINGS_CAT,
  UPDATE_CONFIG
} from "../actions/settings";
import { RECEIVE_DATA } from "../actions/shared";

export default function Settings(state = [], action) {
  switch (action.type) {
    case TOGGLE_SERVICE:
      const updateState = Object.assign({}, state);
      const settingType = updateState[action.settingCategory].map(item =>
        item.id !== action.id
          ? item
          : Object.assign({}, item, { checked: !item.checked })
      );
      updateState[action.settingCategory] = settingType;
      return updateState;
    case UPDATE_CONFIG:
      const uState = Object.assign({}, state);
      uState[SETTINGS_CAT][action.configType] = action.value;
      return uState;
    case RECEIVE_DATA:
      return action.settings;
    default:
      return state;
  }
}
