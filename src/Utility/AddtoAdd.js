const getStoredApp = () => {
  const storeAppStr = localStorage.getItem("Applist");
  if (storeAppStr) {
    const storeAppData = JSON.parse(storeAppStr);
    return storeAppData;
  } else {
    return [];
  }
};

const addToStoregeDb = (id) => {
  const storeAppData = getStoredApp();
  if (storeAppData.includes(id)) {
    // ("vai eii id already exist");
  } else {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("Applist", data);
  }
};
// const remobeToStorege = (id) => {
//   const storeAppData = getStoredApp();
//   storeAppData.push(id);
//   const data = JSON.stringify(storeAppData);
//   localStorage.removeItem("Applist", data);
// };

export { addToStoregeDb, getStoredApp };
