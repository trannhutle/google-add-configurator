import KwServices from "../backServices/keywords";
export const DELETE_KEYWORD = "DELETE_KEYWORD";
export const ADD_KEYWORD = "ADD_KEYWORD";

function deleteKeyword(id) {
  return {
    type: DELETE_KEYWORD,
    id
  };
}
function addKeyword(keyword) {
  return {
    type: ADD_KEYWORD,
    keyword
  };
}

export function handleRemoveKeyword(keyword) {
  return dispatch => {
    dispatch(deleteKeyword(keyword.id));
    KwServices.deleteKeyword(keyword.id).catch(() => {
      alert("An error is occured!");
      dispatch(addKeyword(keyword));
    });
  };
}

export function handleAddKeyword(name, cb) {
  return dispatch => {
    KwServices.saveKeyword(name)
      .then(kw => {
        dispatch(addKeyword(kw));
        cb();
      })
      .catch(() => {
        alert("An error is occured!!!");
      });
  };
}
