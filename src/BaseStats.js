import React from "react";
import "./BaseStats.css";

function BaseStats(props) {
  const { stats, clicker } = props;
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button className="sp-stats" onClick={clicker}>
        Check special Stats
      </button>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{stats.hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{stats.attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{stats.defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{stats.speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStats;
