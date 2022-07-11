import { px } from "./px";

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: "#546dd1",
  },
  title: { show: false },
  legend: { show: false },
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40),
  },
};
