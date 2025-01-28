import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import LoadingSpinner from "./SVG-Elements/LoadingSpinner";

const GitHubStats = ({ username }) => {
  const [statsLoading, setStatsLoading] = useState(true);
  const [streakLoading, setStreakLoading] = useState(true);

  const theme = {
    light: ["#f0f0f0", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="github-stats-wrapper">
      <div className="container" style={{ padding: "0" }}>
        <div className="stats-container">
          <div className="stats-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9`}
              alt="GitHub Stats"
              onLoad={() => setStatsLoading(false)}
              onError={() => setStatsLoading(false)}
              style={{ display: statsLoading ? "none" : "block" }}
            />
            {statsLoading && <LoadingSpinner />}
          </div>
          <div className="stats-card">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff`}
              alt="GitHub Streak"
              onLoad={() => setStreakLoading(false)}
              onError={() => setStreakLoading(false)}
              style={{
                display: streakLoading ? "none" : "block",
                width: "100%",
              }}
            />
            {streakLoading && <LoadingSpinner />}
          </div>
          <div className="stats-card contribution-card">
            <GitHubCalendar
              username={username}
              theme={theme}
              fontSize={12}
              //   hideColorLegend
              hideTotalCount
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
