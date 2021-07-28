import React from "react";
import { Timeline } from "antd";

const { Item } = Timeline;

export default function ActivityItem({ title, desc }) {
  return (
    <div>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
