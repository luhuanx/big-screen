import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import React from "react";
import { createEchartOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];

  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    myChart.setOption(
      createEchartOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: {
                color: "white",
                fontSize: px(20),
              },
              formatter(options) {
                return (options.value * 100).toFixed(0) + "%";
              },
            },

            labelLine: {
              show: false,
            },

            itemStyle: {
              borderWidth: px(4),
              borderColor: "#0f113a",
            },

            data: [
              {
                value: 0.07,
                name: "10-20",
              },

              {
                value: 0.1,
                name: "20-30",
              },

              {
                value: 0.23,
                name: "30-40",
              },

              {
                value: 0.28,
                name: "40-50",
              },

              {
                value: 0.32,
                name: "50-60",
              },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="年龄分布-图2">
      {" "}
      <div className="chart">
        {" "}
        <div className="main" ref={divRef}></div>{" "}
        <div className="text">年龄段</div>{" "}
      </div>{" "}
      <div className="legend">
        {" "}
        <span
          style={{
            background: colors[0],
          }}
        ></span>
        10-20{" "}
        <span
          style={{
            background: colors[1],
          }}
        ></span>
        20-30{" "}
        <span
          style={{
            background: colors[2],
          }}
        ></span>
        30-40{" "}
        <span
          style={{
            background: colors[3],
          }}
        ></span>
        40-50{" "}
        <span
          style={{
            background: colors[4],
          }}
        ></span>
        50-60{" "}
      </div>{" "}
    </div>
  );
};
