import KwServices from "../backServices/keywords";
import SiteServices from "../backServices/sites";
export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(keywords, sites) {
  return {
    type: RECEIVE_DATA,
    keywords,
    sites
  };
}

export function handleLoadData() {
  return dispatch => {
    return Promise.all([
      KwServices.getKeywords(),
      SiteServices.getSites()
    ]).then(([keywords, sites]) => {
      dispatch(receiveData(keywords, sites));
    });
  };
}
