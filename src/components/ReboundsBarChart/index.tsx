"use client";
import styles from "./index.module.css";
import { ResponsiveRadar } from "@nivo/radar";
import { lebronData } from "../../data/lebronData";
import { ResponsiveBar } from "@nivo/bar";

export default function ReboundsBarChart() {
  const rebounds = lebronData.rebounds.map((item) => ({
    season: item.season,
    rebounds: item.rebounds,
  }))

  const theme = {
    axis: {
      domain: {
        line: {
          stroke: "#000000",
          strokeWidth: 1
        }
      },
      ticks: {
        text: {
          fontSize: 12,
          fill: "#333333"
        }
      },
      legend: {
        text: {
          fontSize: 16,
          fill: "#333333"
        }
      },
      container: {
        fontSize: 18,
        background: '#ffffff',
        color: '#333333',
        borderRadius: '2px',
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
        padding: '5px 9px',
      }
    },
  }

  return (
    <div className={styles.chartContainer}>
      <ResponsiveBar
        data={rebounds}
        keys={["rebounds"]}
        indexBy="season"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temporada",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Rebotes por jogo",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        theme={theme}
      />
    </div>
  );
}
