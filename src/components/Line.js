import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts/lib/echarts";
import "../static/line.css";

function Line(props) {
  const getOption = () => {
    return {
      title: {
        // text: "疫情新增趋势（人）"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      tooltip: {
        trigger: 'item'
      },
      align: "center",
      legend: {
        show: false,
        data: ["新增确诊", "新增疑似"]
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          show: true,
          interval: props.interval ? 0 : null,
          rotate: 30, //倾斜30度
          textStyle: {
            color: "#666",
            fontSize: 10,
            fontFamily: "微软雅黑"
          }
        },
        data: [0].concat(props.xAxisData)
      },
      yAxis: {
        /* axisTick: {
          show: false
        }, */
        type: "value",
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        }
      },
      series: [
        {
          name: "新增确诊",
          type: "line",
          lineStyle: {
            normal: {
              width: 2, //连线粗细
              color: "#005dff" //连线颜色
            }
          },
          smooth: true,
          data: [0].concat(props.confirm)
        },
        {
          name: "新增疑似",
          type: "line",
          lineStyle: {
            normal: {
              width: 2, //连线粗细
              color: "#f8d4a7" //连线颜色
            }
          },
          smooth: true,
          data: [0].concat(props.suspect)
        }
      ]
    };
  };

  return (
    <div className="line-wrap">
      <div className="tips">{props.title}</div>
      <div className="legend">
        <span className="add-confirm">{props.legend1}</span>
        <span className="add-suspect">{props.legend2}</span>
      </div>
      <ReactEcharts
        option={getOption()}
      ></ReactEcharts>
    </div>
  );
}

export default Line;
