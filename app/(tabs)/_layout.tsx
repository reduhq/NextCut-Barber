import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="create-new-appointment"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{tabBarIcon: ({color}) =>(
        <MaterialIcons name="person" size={24} color="black" />
      )}}/>
    </Tabs>
  );
}
