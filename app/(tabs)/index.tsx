import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Index = () => {
  return (
    <View className="px-[.5rem] bg-[#F4F4F9] dark:bg-[#1F1F1F] h-full">
      <Stack.Screen
        options={{
          headerTitle: "Configuración",
          headerRight: () => null,
        }}
      />
      <Text className="text-red-600">Hola reduhq</Text>
      
      <Link asChild href="/settings">
              <Pressable>
                <MaterialIcons name="settings" size={24} color="black" />
              </Pressable>
            </Link>
    </View>
  );
};

export default Index;
