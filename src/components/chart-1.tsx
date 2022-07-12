import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echarts-options";

const px = (n) => (n / 2420) * (window as any).pageWidth;

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "兰州新区", 2021: 33 },
    { name: "兰州新区", 2021: 23 },
    { name: "兰州新区", 2021: 19 },
    { name: "兰州新区", 2021: 45 },
    { name: "兰州新区", 2021: 17 },
    { name: "兰州新区", 2021: 29 },
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
        {
          name: "兰州新区",
          2021: Math.random() * 50,
        },
      ];
      x(newData);
    }, 3000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(
      createEchartOptions({
        textStyle: {
          fontSize: px(12),
          color: "#546dd1",
        },
        xAxis: {
          axisLine: {
            lineStyle: { color: "#083b70" },
          },
          axisTick: { show: false },
          data: data.map((i) => i.name),
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
          y: px(30),
          x2: px(40),
          y2: px(50),
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
            type: "bar",
            data: data.map((i) => i[2021]),
          },
        ],
      })
    );
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
