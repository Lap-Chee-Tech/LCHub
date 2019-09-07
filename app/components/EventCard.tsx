import React from "react";
import { Card, CardItem, Body, Text, Container } from "native-base";
import { View } from "react-native";
export const EventCard = (props: { event: string }) => {
  return (
    <Card style={{ height: 90, marginLeft: 5, marginRight: 5 }}>
      <CardItem>
        <Body>
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 3.5,
                justifyContent: "center",
                borderColor: "#EC5C80",
                borderRightWidth: 1.5
              }}
            >
              <Text style={{ fontSize: 25 }}>{props.event}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 30 }}>16</Text>
              <Text>March</Text>
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};
