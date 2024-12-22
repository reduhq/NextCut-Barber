import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useColorScheme } from "nativewind";

const Index = () => {
  const headerHeight = useHeaderHeight();
  const { colorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View className="pl-[1rem]">
              <Text className="text-primary text-[1rem]">
                Buenos Días! 👋👋
              </Text>
              <Text className="font-bold text-purple text-[2rem]">
                Rey Halsall
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link
              asChild
              href="/settings"
              className="mr-[1rem] px-[.5rem] py-[.35rem] rounded-lg shadow-2xl bg-card"
            >
              <Pressable>
                <MaterialIcons
                  name="menu"
                  size={24}
                  color={`${colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F"}`}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={{ paddingTop: headerHeight }} className="container bg-theme">
        <View className="bg-card p-[2rem] rounded-xl  gap-[1rem] shadow-xl">
          <Text className="text-primary text-[1.5rem]">Resumen del Día</Text>
          <Text className="text-green text-[2rem] font-bold">
            8 Citas Restantes
          </Text>
          <View className="flex-row ">
            <Pressable className="p-[1rem] rounded-full bg-theme">
              <MaterialIcons
                name="more-horiz"
                size={24}
                color={`${colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F"}`}
              />
            </Pressable>
            <View className="flex-1 justify-center ml-[.5rem]">
              <Text className="text-primary">Siguiente: Rey Halsall</Text>
              <Text className="text-secondary">10:30 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;
