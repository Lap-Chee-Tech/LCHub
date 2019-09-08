import React, { Component } from "react";
import { Container } from "native-base";

export class Event extends Component<{}, { events: Array<string> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: ["Event 1", "Event 2", "Event 3"]
    };
  }

  // 1. fetch for all events signed up
  // 2. show them here
  render() {
    return <Container></Container>;
  }
}
