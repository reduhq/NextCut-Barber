import { Stack } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

const settings = () => {
  const {setColorScheme} = useColorScheme()

  return (
    <View className="px-[.5rem] bg-[#F4F4F9] dark:bg-[#1F1F1F] h-full">
      <Stack.Screen
        options={{
          headerTitle: "Configuración",
          headerRight: () => null,
        }}
      />
      <Text>Settings</Text>
      <View className="flex flex-row">
        <Pressable onPress={()=>setColorScheme("system")} className="flex-1 p-1 bg-[#FFF] border border-black/10 dark:bg-[#000]">
          <Text className="text-center dark:text-white">Sistema</Text>
        </Pressable>
        <Pressable onPress={()=>{setColorScheme("light")}} className="flex-1 p-1 bg-[#FFFFFF] border border-y-black/10 border-x-transparent dark:bg-[#000]">
          <Text className="text-center dark:text-white">Claro</Text>
        </Pressable>
        <Pressable onPress={()=>{setColorScheme("dark")}} className="flex-1 p-1 bg-[#FFFFFF] border border-black/10 dark:bg-[#000]">
          <Text className="text-center dark:text-white">Oscuro</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default settings;
