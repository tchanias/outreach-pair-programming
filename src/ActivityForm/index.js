import React, { useState } from "react";
import { ActivityTypes } from "../helpers";
import { Input, Row, Col, Button } from "antd";
import ActivityType from "../ActivityType";

const { TextArea } = Input;

export default function ActivityForm({ setActivities }) {
  const [notes, setNotes] = useState("");
  const [type, setType] = useState("note");
  const renderActivityTypes = () => {
    return ActivityTypes.map((activityType, index) => (
      <ActivityType
        key={index}
        type={activityType}
        setType={(type) => setType(type)}
        selectedType={type}
      />
    ));
  };
  return (
    <div>
      <Row>
        <TextArea
          placeholder="Add a note about Milton Romaguera..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Row>
      <Row>
        <Col>{renderActivityTypes()}</Col>
        <Col>
          <Button onClick={() => setActivities({ notes, type })}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}
