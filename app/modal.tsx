import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Constants from "expo-constants";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { useColorScheme } from "nativewind";

const CreateNewAppointment = () => {
  const headerHeight = Constants.statusBarHeight;
    const { colorScheme } = useColorScheme();
    const bgColor = colorScheme == "dark" ? "#14151a" : "#F4F4F9";
    const textHeaderColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
    const textDefaultColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";

  // date values
  const today = new Date();
  const startDate = getFormatedDate(today, "YYYY/MM/DD");
  const [selectedDate, setSelectedDate] = useState(startDate);

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

        {/* form */}
        <DatePicker
          mode="calendar"
          minimumDate={startDate}
          selected={selectedDate}
          onDateChange={(date)=>{
            setSelectedDate(date)
          }}
          options={{
            backgroundColor: bgColor,
            textHeaderColor: textHeaderColor,
            textDefaultColor: textDefaultColor,
            // selectedTextColor: "#1f2022",
            mainColor: "#60A5FA",
            // textSecondaryColor: "#60A5FA",
            // borderColor:"transparent",
            // textSecondaryColor: "red"
          }}
        />
      </View>
    </>
  );
};

export default CreateNewAppointment;
