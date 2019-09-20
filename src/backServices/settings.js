import BackSharedServices from "./shared";
const SettingServices = {};

var settings = {
  browsers: [
    { id: BackSharedServices.getId(), name: "Chrome", checked: false },
    { id: BackSharedServices.getId(), name: "Firefox", checked: false },
    { id: BackSharedServices.getId(), name: "Explorer", checked: true },
    { id: BackSharedServices.getId(), name: "Safari", checked: false },
    { id: BackSharedServices.getId(), name: "Opera", checked: false },
    { id: BackSharedServices.getId(), name: "Incognito", checked: false }
  ],
  devices: [
    { id: BackSharedServices.getId(), name: "Device Reset", checked: false },
    { id: BackSharedServices.getId(), name: "Vinn Reset", checked: false },
    { id: BackSharedServices.getId(), name: "Phone Reset", checked: true },
    { id: BackSharedServices.getId(), name: "Mobile Data", checked: true },
    { id: BackSharedServices.getId(), name: "Fly Mode", checked: false }
  ],
  methods: [
    { id: BackSharedServices.getId(), name: "Remove Cookies", checked: true },
    {
      id: BackSharedServices.getId(),
      name: "Change Resolution",
      checked: false
    },
    { id: BackSharedServices.getId(), name: "Mouse Tracks", checked: false },
    { id: BackSharedServices.getId(), name: "Data Saving Mode", checked: true },
    { id: BackSharedServices.getId(), name: "Random Generate", checked: false },
    {
      id: BackSharedServices.getId(),
      name: "Analytic Protection",
      checked: true
    },
    { id: BackSharedServices.getId(), name: "Remove History", checked: false }
  ],
  settings: {
    waitHour: 40,
    waitSecond: 55,
    isVisitPage: true,
    pageNo: 1,
    pageFrom: 30,
    pageToL: 50,
    operationComplete: 5,
    operationWait: 10,
    targetSize: 10,
    targetWait: 20,
    reset: 1
  }
};

SettingServices.getSettings = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const settingsDB = localStorage.getItem("settingsDB");
        if (settingsDB) {
          settings = JSON.parse(settingsDB);
        }
      } catch (err) {
        console.error(err);
      }
      res(settings);
    }, 2000);
  });
};

SettingServices.saveSettings = updatedSettings => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      localStorage.setItem("settingsDB", JSON.stringify(updatedSettings));
      res(updatedSettings);
    }, 1000);
  });
};

export default SettingServices;
