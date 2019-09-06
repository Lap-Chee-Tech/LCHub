import React, { Component } from "react";
import { Container, Header, View } from "native-base";
import { Switch, Link } from "react-router-dom";

import { AppHeader, EventCard } from "../../components";

export class Home extends Component<{}, { events: Array<string> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: ["Event 1", "Event 2", "Event 3"]
    };
  }

  // 1. fetch for all events signed up
  // 2. show them here
  render() {
    return (
      <Container>
        <AppHeader />
        {this.state.events.map(event => {
          return <EventCard key={Math.random()} event={event} />;
        })}
      </Container>
    );
  }
}
