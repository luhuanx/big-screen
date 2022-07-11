import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echarts-options";
import React from "react";
import { px } from "../shared/px";

export const Chart7 = () => {
  const divRef = useRef(null);
  const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];

  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    myChart.setOption(
      createEchartOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            startAngle: -20,
            type: "pie",
            radius: ["25%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              textStyle: { color: "white", fontSize: px(20) },
              distanceToLabelLine: 0,
              formatter(options) {
                return options.value * 100 + "%";
              },
            },
            labelLine: {
              show: true,
              length: 0,
            },
            roseType: "area",
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: "rgba(0,0,0,0.5)",
            },
            data: [
              { value: 0.36, name: "刑事案件" },
              { value: 0.2, name: "民事案件" },
              { value: 0.18, name: "经济案件" },
              { value: 0.24, name: "其他案件" },
            ],
          },
        ],
      })
    );
  });

  return (
    <div className="年龄分布-图1">
      <div className="chart">
        <div className="main" ref={divRef}></div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }}></span>刑事
        <span style={{ background: colors[1] }}></span>民事
        <span style={{ background: colors[2] }}></span>经济
        <span style={{ background: colors[3] }}></span>其他
      </div>
    </div>
  );
};
