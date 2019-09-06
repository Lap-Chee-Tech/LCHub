import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

export const EventCard = (props: { event: string }) => {
  return (
    <Card style={{ height: 100 }}>
      <CardItem>
        <Body>
          <Text>{props.event}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
