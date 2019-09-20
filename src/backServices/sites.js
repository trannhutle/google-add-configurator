import BackSharedServices from "./shared";
const SiteServices = {};

var sites = [
  { id: BackSharedServices.getId(), name: "www.dockers.com" },
  { id: BackSharedServices.getId(), name: "www.adidas.com" },
  { id: BackSharedServices.getId(), name: "www.nike.com" },
  { id: BackSharedServices.getId(), name: "www.underamour.com" },
  { id: BackSharedServices.getId(), name: "www.newbalance.com" },
  { id: BackSharedServices.getId(), name: "www.puma.com" },
  { id: BackSharedServices.getId(), name: "www.prada.com" },
  { id: BackSharedServices.getId(), name: "www.fredperry.com" },
  { id: BackSharedServices.getId(), name: "www.caterpillar.com" },
  { id: BackSharedServices.getId(), name: "www.gucci.com" },
  { id: BackSharedServices.getId(), name: "www.allenedmonds.com" },
  { id: BackSharedServices.getId(), name: "www.brunomagli.com" }
];

SiteServices.getSites = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(sites);
    }, 3000);
  });
};

SiteServices.saveSite = name => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const site = {
        id: BackSharedServices.getId(),
        name: name
      };
      sites.concat([site]);
      BackSharedServices.fail() ? rej(site) : res(site);
    }, 1000);
  });
};
SiteServices.deleteSite = id => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      sites = sites.filter(site => {
        if (site.id !== id) {
          return true;
        }
        return false;
      });
      BackSharedServices.fail() ? rej() : res(sites);
    }, 1000);
  });
};

export default SiteServices;
