import React from "react";
import { Button } from "antd";

export default function ActivityType({ selectedType, setType, type }) {
  return (
    <Button
      type={selectedType === type ? "primary" : "default"}
      onClick={() => setType(type)}
    >
      {type}
    </Button>
  );
}
