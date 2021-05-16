import React, { useState, useEffect } from "react";
import { fetchLatestData } from "../../data-fetcher";
import { Line, Bar } from "react-chartjs-2";
//import styles from './'
import styles from "../Chart/Chart.module.css";

function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const retrived = await fetchLatestData();
      setDailyData(await retrived);
      console.log(dailyData);
    };
    fetchData();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ lastUpdate }) => lastUpdate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
