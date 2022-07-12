import React from "react";
import "./home.scss";
import headerBg from "../images/header.png";

import { Chart1 } from "../components/chart-1";

import { Chart2 } from "../components/chart-2";

import { Chart3 } from "../components/chart-3";

import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";
import { Chart7 } from "../components/chart-7";
import { Chart8 } from "../components/chart-8";
import { Chart9 } from "../components/chart-9";
import { Chart10 } from "../components/chart-10";
import { Chart6 } from "../components/chart-6";
import { Chart11 } from "../components/chart-11";

export const Home = () => {
  const year = new Date().getFullYear();

  return (
    <div className="home">
      {" "}
      <header
        className="x"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      />{" "}
      <main>
        {" "}
        <section className="section1">
          {" "}
          <Chart1 /> <Chart2 />{" "}
        </section>{" "}
        <section className="section2">
          {" "}
          <Chart3 /> <Chart4 />{" "}
        </section>{" "}
        <section className="bordered section3">
          <Chart5 />
        </section>{" "}
        <section className="section4">
          <Chart11 />
          <Chart6 />
        </section>{" "}
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="chart">
              <Chart7 />
            </div>
          </div>
          <div className="bordered row2 年龄分布">
            <h2>犯罪人员年龄分布</h2>
            <div className="charts">
              <Chart8 />
              <Chart9 />
            </div>
          </div>
          <div className="bordered row3 地级市统计">
            <h2>案发地级市统计</h2>
            <div className="chart">
              <Chart10 />
            </div>
          </div>
        </section>{" "}
      </main>{" "}
      <footer>&copy; huanxlu 2022- {year}</footer>{" "}
    </div>
  );
};
