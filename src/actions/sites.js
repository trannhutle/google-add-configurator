import SiteServices from "../backServices/sites";

export const DELETE_SITE = "DELETE_SITE";
export const ADD_SITE = "ADD_SITE";

function deleteSite(id) {
  return {
    type: DELETE_SITE,
    id
  };
}
function addSite(site) {
  return {
    type: ADD_SITE,
    site
  };
}

export function handleDeleteSite(site) {
  return dispatch => {
    dispatch(deleteSite(site.id));
    SiteServices.deleteSite(site.id).catch(() => {
      alert("An error is occured!");
      dispatch(addSite(site));
    });
  };
}

export function handleAddSite(name, cb) {
  return dispatch => {
    SiteServices.saveSite(name)
      .then(site => {
        dispatch(addSite(site));
        cb();
      })
      .catch(() => {
        alert("An error is occured!!!");
      });
  };
}
