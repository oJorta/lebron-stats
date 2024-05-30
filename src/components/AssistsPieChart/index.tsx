"use client";
import styles from "./index.module.css";
import { ResponsivePieCanvas } from '@nivo/pie'
import { lebronData } from "../../data/lebronData";

export default function AssistsPieChart() {
  const assists = lebronData.assists.map((item) => ({
    id: item.season,
    label: item.season,
    value: item.assists,
  }));

  return (
    <div className={styles.chartContainer}>
      <ResponsivePieCanvas
        data={assists}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'yellow_orange_brown' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
      />
    </div>
  );
}
