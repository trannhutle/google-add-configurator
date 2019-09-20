export const TOGGLE_SERVICE = "TOGGLE_SERVICE";
export const UPDATE_CONFIG = "UPDATE_CONFIG";
export const BROWSERS_CAT = "browsers";
export const DEVICES_CAT = "devices";
export const METHODS_CAT = "methods";
export const SETTINGS_CAT = "settings";

const toggleService = (settingCategory, id) => {
  return {
    type: TOGGLE_SERVICE,
    settingCategory,
    id
  };
};

const updateConfig = (configType, value) => {
  return {
    type: UPDATE_CONFIG,
    configType,
    value
  };
};

export const handleToggleService = (type, id) => {
  return dispatch => {
    dispatch(toggleService(type, id));
  };
};

export const handleUpdateConfig = (confType, value) => {
  return dispatch => {
    dispatch(updateConfig(confType, value));
  };
};
