import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ completed }) {
  const pct = Math.min(100, Math.max(0, completed));
  return (
    <div className="progress-container">
      <div className="progress-filler" style={{ width: `${pct}%` }}>
        {pct}%
      </div>
    </div>
  );
}
