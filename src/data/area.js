import area from './area.json';

function getAreaData() {
  const areaData = {
    lastUpdateTime: null,
    chinaTotal: null,
    chinaAdd: null,
    mapData: [],
    addXAxisData: [],
    addSuspect: [],
    addConfirm: [],
    totalXAxisData: [],
    totalSuspect: [],
    totalConfirm: [],
    table: null,
  }
  const {lastUpdateTime, chinaTotal, chinaAdd, areaTree, chinaDayList, chinaDayAddList} = area;
  areaData.lastUpdateTime = lastUpdateTime;
  areaData.chinaTotal = chinaTotal;
  areaData.chinaAdd = chinaAdd;
  chinaDayAddList.forEach(element => {
    areaData.addXAxisData.push(element.date);
    areaData.addSuspect.push(element.suspect);
    areaData.addConfirm.push(element.confirm);
  });
  areaData.addXAxisData = areaData.addXAxisData.map(date => {
    return formatDate(date)
  })
  chinaDayList.forEach(element => {
    areaData.totalXAxisData.push(element.date);
    areaData.totalSuspect.push(element.suspect);
    areaData.totalConfirm.push(element.confirm);
  })
  areaData.totalXAxisData = areaData.totalXAxisData.map(date => {
    return formatDate(date)
  })
  areaData.table = areaTree[0];
  areaTree[0].children.forEach(element => {
    const obj = {
      name: element.name,
      value: element.total.confirm
    }
    areaData.mapData.push(obj)
  })
  return areaData;
}
function formatDate(date) {
  return parseInt(date.split('.')[0]) + '-' + parseInt(date.split('.')[1])
}

export default getAreaData;