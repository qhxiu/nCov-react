import React, { useState } from "react";
import "../static/table.css";

const Table = ({ areaData }) => {
  return (
    <div className="table">
      <ul className="table-header">
        <li>地区</li>
        <li>新增</li>
        <li>累计确诊</li>
        <li>治愈</li>
        <li>死亡</li>
      </ul>
      <ul className="table-content">
        {areaData.children.map(child => {
          return <Item key={child.name} data={child}></Item>;
        })}
      </ul>
    </div>
  );
};

function Item({ data }) {
  const [isExpand, setIsExpand] = useState(false);
  const expand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <li className="item" onClick={() => expand()}>
      <div className="province">
        <div>{data.name}</div>
        <div>{data.today.confirm}</div>
        <div>{data.total.confirm}</div>
        <div>{data.total.heal}</div>
        <div>{data.total.dead}</div>
      </div>
      <ul
        className="table-expand"
        style={{ display: `${isExpand ? "block" : "none"}` }}
      >
        {data.children.map((child, index) => {
          if (index === data.children.length - 1) {
            return;
          }
          return (
            <li key={child.name}>
              <div>{child.name}</div>
              <div>{child.today.confirm}</div>
              <div>{child.total.confirm}</div>
              <div>{child.total.heal}</div>
              <div>{child.total.dead}</div>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Table;
