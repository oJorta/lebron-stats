"use client";
import styles from "./index.module.css";
import { ResponsiveRadar } from "@nivo/radar";
import { lebronData } from "../../data/lebronData";

export default function StatsRadarChart() {
  const stats = [
    {
        year: "2024",
        points: lebronData.points.find((d) => d.season === "2024")?.points ?? 0,
        rebounds: lebronData.rebounds.find((d) => d.season === "2024")?.rebounds ?? 0,
        assists: lebronData.assists.find((d) => d.season === "2024")?.assists ?? 0,
        steals: lebronData.steals.find((d) => d.season === "2024")?.steals ?? 0,
        blocks: lebronData.blocks.find((d) => d.season === "2024")?.blocks ?? 0,
    },
    {
      year: "2023",
      points: lebronData.points.find((d) => d.season === "2023")?.points ?? 0,
      rebounds: lebronData.rebounds.find((d) => d.season === "2023")?.rebounds ?? 0,
      assists: lebronData.assists.find((d) => d.season === "2023")?.assists ?? 0,
      steals: lebronData.steals.find((d) => d.season === "2023")?.steals ?? 0,
      blocks: lebronData.blocks.find((d) => d.season === "2023")?.blocks ?? 0,
    },
    {
      year: "2022",
      points: lebronData.points.find((d) => d.season === "2022")?.points ?? 0,
      rebounds: lebronData.rebounds.find((d) => d.season === "2022")?.rebounds ?? 0,
      assists: lebronData.assists.find((d) => d.season === "2022")?.assists ?? 0,
      steals: lebronData.steals.find((d) => d.season === "2022")?.steals ?? 0,
      blocks: lebronData.blocks.find((d) => d.season === "2022")?.blocks ?? 0,
    },
    {
      year: "2021",
      points: lebronData.points.find((d) => d.season === "2021")?.points ?? 0,
      rebounds: lebronData.rebounds.find((d) => d.season === "2021")?.rebounds ?? 0,
      assists: lebronData.assists.find((d) => d.season === "2021")?.assists ?? 0,
      steals: lebronData.steals.find((d) => d.season === "2021")?.steals ?? 0,
      blocks: lebronData.blocks.find((d) => d.season === "2021")?.blocks ?? 0,
    },
    {
      year: "2020",
      points: lebronData.points.find((d) => d.season === "2020")?.points ?? 0,
      rebounds: lebronData.rebounds.find((d) => d.season === "2020")?.rebounds ?? 0,
      assists: lebronData.assists.find((d) => d.season === "2020")?.assists ?? 0,
      steals: lebronData.steals.find((d) => d.season === "2020")?.steals ?? 0,
      blocks: lebronData.blocks.find((d) => d.season === "2020")?.blocks ?? 0,
    },
  ];

  const theme = {
    axis: {
        ticks: {
          text: {
            fontSize: 14,
            fill: "#333333"
          }
        },
      },
  };

  return (
    <div className={styles.chartContainer}>
      <ResponsiveRadar
        data={stats}
        keys={["points", "rebounds", "assists", "steals", "blocks"]}
        indexBy="year"
        maxValue="auto"
        margin={{ top: 50, right: 60, bottom: 20, left: 60 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={32}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        theme={theme}
      />
    </div>
  );
}
