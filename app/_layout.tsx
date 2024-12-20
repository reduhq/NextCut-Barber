import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "nativewind";
import "../global.css";

export default function Layout() {
  const {colorScheme} = useColorScheme()
  const haderBackgroudColor = colorScheme == 'dark' ? "#1F1F1F" : "#F4F4F9" 
  const headerTextColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F"
  return (
    <View className="bg-red-600 h-full">
      <StatusBar />
      <Stack
        screenOptions={{
          headerTitle: "NextCut",
          headerTintColor: headerTextColor,
          headerStyle: {backgroundColor: haderBackgroudColor},
          headerRight: () => (
            <Link asChild href="/settings">
              <Pressable>
                <MaterialIcons name="settings" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
