import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

const CreateNewAppointment = () => {
  return (
    <>
      <Modal visible animationType="slide">
        <View className="p-[1.5rem]">
          <Text className="self-center text-[1.5rem] font-bold">
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
      </Modal>
    </>
  );
};

export default CreateNewAppointment;
