import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { baseEchartOptions } from "../shared/base-echart-options";
import { px } from "../shared/px";
import { createEchartOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    var option = {
      ...baseEchartOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },

      yAxis: {
        type: "category",
        data: [
          "Brazil",
          "Indonesia",
          "USA",
          "India",
          "China",
          "World",
          "7",
          "8",
          "9",
        ],
      },

      series: [
        {
          name: "破案排名1",
          type: "bar",
          data: [
            18203, 23489, 29034, 104970, 131744, 630230, 22222, 33333, 44444,
          ],
        },

        {
          name: "破案排名2",
          type: "bar",
          data: [
            19325, 23438, 31000, 121594, 134141, 681807, 555555, 66666, 777777,
          ],
        },
      ],
    };

    myChart.setOption(createEchartOptions(option));
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2> <div ref={divRef} className="chart"></div>
    </div>
  );
};
