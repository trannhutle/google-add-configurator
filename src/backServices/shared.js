const BackSharedServices = {};

BackSharedServices.fail = () => {
  return Math.floor(Math.random() * (5 - 1)) === 3;
};

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
BackSharedServices.getId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default BackSharedServices;
