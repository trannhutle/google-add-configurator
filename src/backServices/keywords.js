import BackSharedServices from "./shared";
const KwServices = {};

var keywords = [
  { id: BackSharedServices.getId(), name: "Shoes" },

  { id: BackSharedServices.getId(), name: "Shoes carnival" },
  { id: BackSharedServices.getId(), name: "Shoes shoes palace" },
  { id: BackSharedServices.getId(), name: "Shoes stores near me" },
  { id: BackSharedServices.getId(), name: "Shoes shoes for crwe" },
  { id: BackSharedServices.getId(), name: "Shoes station" },
  { id: BackSharedServices.getId(), name: "Shoes repair" },
  { id: BackSharedServices.getId(), name: "Shoes store" },
  { id: BackSharedServices.getId(), name: "Shoes for women" },
  { id: BackSharedServices.getId(), name: "Shoes fashion week" },
  { id: BackSharedServices.getId(), name: "Shoes instagram" },
  { id: BackSharedServices.getId(), name: "Shoes stories" }
];

KwServices.getKeywords = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const keywordsDB = localStorage.getItem("keywordsDB");
        console.log(keywordsDB);
        if (keywordsDB) {
          keywords = JSON.parse(keywordsDB);
        }
      } catch (err) {
        console.error(err);
      }
      res(keywords);
    }, 3000);
  });
};

KwServices.saveKeyword = name => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const kw = {
        id: BackSharedServices.getId(),
        name: name
      };
      keywords.concat([kw]);
      BackSharedServices.fail() ? rej(kw) : res(kw);
    }, 1000);
  });
};
KwServices.deleteKeyword = id => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      keywords = keywords.filter(kw => {
        if (kw.id !== id) {
          return true;
        }
        return false;
      });
      BackSharedServices.fail() ? rej() : res(keywords);
    }, 1000);
  });
};

KwServices.saveKeywords = kws => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      localStorage.setItem("keywordsDB", JSON.stringify(kws));
      res(kws);
    }, 1000);
  });
};

export default KwServices;
