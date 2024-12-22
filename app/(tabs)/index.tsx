import { MaterialIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Index = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View className="pl-[.5rem]">
              <Text className="text-[1rem]">Buenos Días! 👋👋</Text>
              <Text className="font-bold text-[2rem]">Rey Halsall</Text>
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/settings" className="pr-[.5rem] text-sm">
              <Pressable>
                <MaterialIcons name="settings" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <View
        style={{ paddingTop: headerHeight }}
        className="container bg-light-bg dark:bg-dark-bg"
      >
        <Text>Resumen del Día</Text>
        <Text>8 Citas Restantes</Text>
      </View>
    </>
  );
};

export default Index;
