import React from "react";
import { Tab, Tabs, TabHeading, Text } from "native-base";
import { EventCard } from "./EventCard";

export const EventBar = () => {
  return (
    <Tabs>
      <Tab
        heading={
          <TabHeading>
            <Text>Upcoming Events</Text>
          </TabHeading>
        }
      >
        <EventCard id="63NiQWJ9jcpKuyD255rX" />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Text>Registered Events</Text>
          </TabHeading>
        }
      >
        <EventCard id="63NiQWJ9jcpKuyD255rX" />
      </Tab>
    </Tabs>
  );
};
