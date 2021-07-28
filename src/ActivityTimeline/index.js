import React, { useState } from "react";
import { Timeline } from "antd";
import { returnTitle, returnDesc } from "../helpers";
import ActivityForm from "../ActivityForm";
import ActivityItem from "../ActivityItem";
const { Item } = Timeline;

export default function ActivityTimeline() {
  const [activities, setActivities] = useState([]);

  const renderActivities = () => {
    return activities.map((activity, index) => {
      <Item></Item>;
    });
  };
  return (
    <Timeline>
      <Item>
        <ActivityForm
          setActivities={(newActivity) =>
            setActivities([...activities, newActivity])
          }
        />
      </Item>
      {renderActivities()}
    </Timeline>
  );
}
