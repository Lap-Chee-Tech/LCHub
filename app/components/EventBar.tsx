import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Content
} from "native-base";
import { View } from "react-native";
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
        <EventCard event="Upcoming Event" />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Text>Registered Events</Text>
          </TabHeading>
        }
      >
        <EventCard event="Registered Event" />
      </Tab>
    </Tabs>
  );
};
