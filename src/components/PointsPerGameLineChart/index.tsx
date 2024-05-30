"use client";
import styles from "./index.module.css";
import { ResponsiveLine } from "@nivo/line";
import { lebronData } from "../../data/lebronData";

export default function PointsPerGameLineChart() {
  const pointsPerGame = {
    id: "Pontos",
    data: lebronData.points.map((item) => ({
      x: item.season,
      y: item.points,
    })),
  }

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
    },
  }
  
  return (
    <div className={styles.chartContainer}>
      <ResponsiveLine
        data={[pointsPerGame]}
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temporada",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Pontos por jogo",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        colors={{ scheme: 'purpleRed_green' }}
        pointSize={12}
        pointColor="#ffc74e"
        pointBorderWidth={2}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        theme={theme}
      />
    </div>
  )
}
