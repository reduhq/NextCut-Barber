import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import "../global.css";

export default function Layout() {
  return (
    <View className=" h-full">
      <StatusBar />
      <Stack
        screenOptions={{
          headerTitle: "NextCut",
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
