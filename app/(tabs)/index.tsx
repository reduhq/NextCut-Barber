import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
      {/* main content */}
      <View style={{ paddingTop: headerHeight }} className="container bg-theme">
        <View className="bg-card p-[1rem] rounded-xl shadow-xl">
          <Text className="text-secondary mb-[1rem]">Resumen del Día</Text>
          <Text className="text-primary text-[2rem] mb-[.5rem] font-bold">
            8 Citas Restantes
          </Text>
          {/* next appointment */}
          <View className="flex-row bg-theme p-[1rem] rounded-lg">
            <View className="flex-1 justify-center ml-[.5rem]">
              <Text className="text-primary">Siguiente: Rey Halsall</Text>
              <Text className="text-secondary">10:30 AM</Text>
            </View>
            <Pressable className="justify-center">
              <MaterialIcons
                name="more-horiz"
                size={24}
                color={`${colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F"}`}
              />
            </Pressable>
          </View>
        </View>
        {/* labels */}
        <ScrollView horizontal contentContainerStyle={{ gap: 10}} className="mt-[1rem]">
          <Pressable className="bg-green px-[1rem] py-[.1rem] rounded-full">
            <Text className="text-white">En progreso</Text>
          </Pressable>
          <Pressable className="bg-blue px-[1rem] py-[.1rem] rounded-full">
            <Text className="text-white">Siguientes citas</Text>
          </Pressable>
          <Pressable className="bg-red px-[1rem] py-[.1rem] rounded-full">
            <Text className="text-white">Canceladas</Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
