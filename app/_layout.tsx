import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import "../global.css";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const haderBackgroudColor = colorScheme == "dark" ? "#1F1F1F" : "#F4F4F9";
  const headerTextColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";

  useEffect(() => {
    const loadColorScheme = async () => {
      const scheme = await AsyncStorage.getItem("colorScheme");
      if (scheme) setColorScheme(scheme as "light" | "dark" | "system");
      else setColorScheme("system");
    };
    loadColorScheme();
  }, []);

  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
