import React from "react";
import "./App.css";
import Card from "./components/Card";
import Map from "./components/Map";
import Line from "./components/Line";
import Table from "./components/Table";
import getAreaData from "./data/area.js";
import {minuteBefore} from "./utils/time.js";

function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <h1>新型冠状病毒</h1>
      <p>实时动态</p>
      <p className="author">by Karin</p>
    </div>
  );
}
function Statistics({lastUpdateTime,chinaTotal, chinaAdd}) {
  minuteBefore(lastUpdateTime);
  return (
    <div>
      <h4 className="statisics-title">疫情情况</h4>
      <div className="statistics-date">
        统计截至<strong>{lastUpdateTime}</strong>更新于
        <strong>{minuteBefore(lastUpdateTime)}</strong>前
      </div>
      <div className="statistics">
        <Card name="confirm" add={chinaAdd.confirm} count={chinaTotal.confirm}>
          全国确诊
        </Card>
        <Card name="suspect" add={chinaAdd.suspect} count={chinaTotal.suspect}>
          全国疑似
        </Card>
        <Card name="cure" add={chinaAdd.heal} count={chinaTotal.heal}>
          治愈人数
        </Card>
        <Card name="dead" add={chinaAdd.dead} count={chinaTotal.dead}>
          死亡人数
        </Card>
      </div>
    </div>
  );
}
function App() {
  const {
    lastUpdateTime,
    chinaTotal,
    chinaAdd,
    mapData,
    addXAxisData,
    addSuspect,
    addConfirm,
    totalXAxisData,
    totalSuspect,
    totalConfirm,
    table
  } = getAreaData();
  return (
    <div className="App">
      <Header></Header>
      <Statistics lastUpdateTime={lastUpdateTime} chinaTotal={chinaTotal} chinaAdd={chinaAdd}></Statistics>
      <Map data={mapData}></Map>
      <Line
        xAxisData={addXAxisData}
        suspect={addSuspect}
        confirm={addConfirm}
        interval={true}
        title="疫情新增趋势（人）"
        legend1="新增确诊"
        legend2="新增疑似"
      ></Line>
      <Line
        xAxisData={totalXAxisData}
        suspect={totalSuspect}
        confirm={totalConfirm}
        interval={false}
        title="全国累计确诊/疑似趋势（人）"
        legend1="累计确诊"
        legend2="累计疑似"
      ></Line>
      <Table areaData={table}></Table>
    </div>
  );
}

export default App;
