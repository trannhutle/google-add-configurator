import KwServices from "../backServices/keywords";
import SiteServices from "../backServices/sites";
import SettingServices from "../backServices/settings";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const SAVE_DATA = "SAVE_DATA";

function receiveData(keywords, sites, settings) {
  return {
    type: RECEIVE_DATA,
    keywords,
    sites,
    settings
  };
}
function saveData() {
  return {
    type: SAVE_DATA
  };
}

export function handleLoadData() {
  return dispatch => {
    return Promise.all([
      KwServices.getKeywords(),
      SiteServices.getSites(),
      SettingServices.getSettings()
    ])
      .then(([keywords, sites, settings]) => {
        dispatch(receiveData(keywords, sites, settings));
      })
      .catch(() => {
        alert("error load data");
      });
  };
}
export function handleSaveData(keywords, sites, settings) {
  return dispatch => {
    return Promise.all([
      KwServices.saveKeywords(keywords),
      SiteServices.saveSites(sites),
      SettingServices.saveSettings(settings)
    ])
      .then(([keywords, sites, settings]) => {
        // dispatch(receiveData(keywords, sites, settings));
        alert("This configuration is started!");
      })
      .catch(() => {
        alert("error load data");
      });
  };
}
