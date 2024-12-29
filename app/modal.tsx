import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Constants from "expo-constants";
import { useColorScheme } from "nativewind";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateNewAppointment = () => {
  const headerHeight = Constants.statusBarHeight;
  const { colorScheme } = useColorScheme();
  const bgColor = colorScheme == "dark" ? "#14151a" : "#F4F4F9";
  const textHeaderColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
  const textDefaultColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";

  return (
    <>
      <View style={{ paddingTop: headerHeight }} className="bg-theme">
        <View className="p-[1.5rem]">
          <Text className="text-primary self-center text-[1.5rem] font-bold">
            Nueva Cita
          </Text>
          <Pressable
            onPress={() => {
              router.back();
            }}
            className="bg-red absolute self-end  mt-[1rem] right-[1rem] px-[1rem] py-[.5rem] rounded-md"
          >
            <Text className="text-white">Cancelar</Text>
          </Pressable>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <DateTimePicker mode="date" value={new Date()}/>
        </View>
      </View>
    </>
  );
};

export default CreateNewAppointment;
