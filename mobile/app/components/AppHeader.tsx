import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title
} from "native-base";

import { EventBar } from "./EventBar";

export const AppHeader = () => {
  return (
    <Header>
      <Left style={{ flex: 0.75 }}>
        <Button transparent>
          <Icon name="arrow-back" style={{ color: "#fff" }} />
        </Button>
      </Left>
      <Body style={{ flex: 1 }}>
        <Title>LCHub</Title>
      </Body>
    </Header>
  );
};
