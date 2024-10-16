import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";

const CustomHeader = () => {
  return (
    <BlurView intensity={80} tint={"extraLight"} style={{ paddingTop: 20 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.roundBtn}>
          <Text style={{}}>SG</Text>
        </TouchableOpacity>
      </View>
      <Text style={{}}>SG</Text>
      <Text style={{}}>SG</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 60,
    backgroundColor: "",
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
