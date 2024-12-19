import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const settings = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Configuración",
          headerRight: () => null,
        }}
      />
      <Text>Settings</Text>
    </View>
  );
};

export default settings;
