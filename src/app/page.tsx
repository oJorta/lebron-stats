"use client";

import styles from "./page.module.css";
import PointsPerGameLineChart from "@/components/PointsPerGameLineChart";
import AssistsPieChart from "@/components/AssistsPieChart";
import StatsRadarChart from "@/components/StatsRadarChart";
import ReboundsBarChart from "@/components/ReboundsBarChart";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        Esse site reúne as estatísticas de <b>Lebron James</b>, um dos maiores jogadores de basquete da história, durante o período de 2020 a 2024.
      </p>
      <section className={styles.sectionContainer}>
        <div className={styles.chartWrapper}>
          <h3>Média de pontos por jogo (por temporada)</h3>
          <PointsPerGameLineChart />
        </div>
        
        <div className={styles.chartWrapper}>
          <h3>Média de assistências</h3>
          <AssistsPieChart />
        </div>
      </section>

      <section className={styles.sectionContainer}>
        <div className={styles.chartWrapper}>
          <h3>Média de rebotes</h3>
          <ReboundsBarChart />
        </div>

        <div className={styles.chartWrapper}>
          <h3>Estatísticas gerais</h3>
          <StatsRadarChart />
        </div>
      </section>
    </main>
  );
}
