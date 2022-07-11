import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const px = (n) => (n / 2420) * (window as any).pageWidth;

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = {
      textStyle: {
        fontSize: px(12),
        color: "#546dd1",
      },
      xAxis: {
        axisLine: {
          lineStyle: { color: "#083b70" },
        },
        axisTick: { show: false },
        data: [
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
        ],
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const arr = val.split("");
              arr.splice(2, 0, "\n");
              return arr.join("");
            } else {
              return val;
            }
          },
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        axisLine: {
          lineStyle: { color: "#083b70" },
        },
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
