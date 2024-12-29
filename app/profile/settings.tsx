import { Pressable, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";

const settings = () => {
  const { setColorScheme } = useColorScheme();

  const saveColorScheme = async (scheme: "light" | "dark" | "system") => {
    setColorScheme(scheme);
    await AsyncStorage.setItem("colorScheme", scheme);
  };

  return (
    <>
      <Stack.Screen options={{ animation: "slide_from_right", animationDuration:10 }} />
      <View className="px-[.5rem] bg-[#F4F4F9] dark:bg-[#1F1F1F] h-full">
        <Text>Settings</Text>
        <View className="flex flex-row">
          <Pressable
            onPress={() => saveColorScheme("system")}
            className="flex-1 p-1 bg-[#FFF] border border-black/10 dark:bg-[#000]"
          >
            <Text className="text-center dark:text-white">Sistema</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              saveColorScheme("light");
            }}
            className="flex-1 p-1 bg-[#FFFFFF] border border-y-black/10 border-x-transparent dark:bg-[#000]"
          >
            <Text className="text-center dark:text-white">Claro</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              saveColorScheme("dark");
            }}
            className="flex-1 p-1 bg-[#FFFFFF] border border-black/10 dark:bg-[#000]"
          >
            <Text className="text-center dark:text-white">Oscuro</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default settings;
