import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Constants from "expo-constants";
import { useColorScheme } from "nativewind";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateNewAppointment = () => {
  const headerHeight = Constants.statusBarHeight;
  const { colorScheme } = useColorScheme();
  const bgColor = colorScheme == "dark" ? "#14151a" : "#F4F4F9";
  const placeholderColor = colorScheme == "dark" ? "#B0B0B0" : "#6D6D6D";
  const textHeaderColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
  const textDefaultColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openClock, setOpenClock] = useState(false);

  return (
    <>
      <View style={{ paddingTop: headerHeight }} className="bg-theme container h-full">
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
        {/* Form */}
        <View className="gap-[1rem] mt-[.5rem]">
          <View className="gap-[.5rem]">
            <Text className="text-primary">Nombre cliente (Opcional)</Text>
            <TextInput
              className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
              placeholder="Cliente"
              placeholderTextColor={placeholderColor}
              placeholderClassName="text-secondary"
            />
          </View>
          <View className="gap-[.5rem]">
            <Text className="text-primary">Precio</Text>
            <TextInput
              keyboardType="number-pad"
              className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
              placeholder="C$ 100"
              placeholderTextColor={placeholderColor}
              placeholderClassName="text-secondary"
            />
          </View>
          <View className="gap-[.5rem]">
            <Text className="text-primary">Dia de la cita</Text>
            <Pressable onPress={() => setOpenCalendar(true)}>
              <TextInput
                className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
                value={Intl.DateTimeFormat("es-ES", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }).format(new Date())}
                editable={false}
                selectTextOnFocus={false}
                placeholderTextColor={placeholderColor}
                placeholderClassName="text-secondary"
              />
            </Pressable>
          </View>
          <View className="gap-[.5rem]">
            <Text className="text-primary">Hora de la cita</Text>
            <Pressable onPress={() => setOpenClock(true)}>
              <TextInput
                className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
                value={Intl.DateTimeFormat("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }).format(new Date())}
                editable={false}
                selectTextOnFocus={false}
                placeholderTextColor={placeholderColor}
                placeholderClassName="text-secondary"
              />
            </Pressable>
          </View>
        </View>
      </View>
      {openCalendar && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          minimumDate={new Date()}
          onChange={(e) => {
            if (["set", "dismissed", "neutralButtonPressed"].includes(e.type)) {
              setOpenCalendar(false)
            }
          }}
        />
      )}
      {openClock && (
        <DateTimePicker
          mode="time"
          value={new Date()}
          onChange={(e) => {
            if (["set", "dismissed", "neutralButtonPressed"].includes(e.type)) {
              setOpenClock(false)
            }
          }}
        />
      )}
    </>
  );
};

export default CreateNewAppointment;
