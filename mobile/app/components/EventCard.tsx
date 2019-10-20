import React from "react";
import { Card, CardItem, Body, Text } from "native-base";
import { View } from "react-native";
import "firebase/firestore";
import { db } from "../../config/dbconfig";

export const EventCard = (props: { id: string }) => {
  const event = db
    .collection("events")
    .doc(props.id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        console.log("Document data:", doc.data());
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error getting document", err);
    });
  console.log(event);
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
              <Text style={{ fontSize: 25 }}>Event</Text>
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
