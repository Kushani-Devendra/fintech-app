import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundButton";
import Dropdown from "@/components/Dropdown";

const Page = () => {
  const balance = 1420;
  const onAddMoney = () => {};

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.currency}>Rs</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} text={"Add money"} onPress={onAddMoney} />
        <RoundBtn icon={"refresh"} text={"Exchange"} />
        <RoundBtn icon={"list"} text={"Details"} />
        <Dropdown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 24,
    marginRight: 24,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    // gap: 10,
  },
  currency: {
    fontSize: 20,
    fontWeight: "semibold",
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default Page;
