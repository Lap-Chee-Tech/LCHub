import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title
} from "native-base";

export const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: "#fff" }}>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" style={{ color: "#000" }} />
        </Button>
      </Left>
      <Body>
        <Title style={{ color: "#000" }}>LCHub</Title>
      </Body>
    </Header>
  );
};
