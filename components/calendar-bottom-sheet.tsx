import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import DatePicker, {
  getFormatedDate,
} from "../react-native-modern-datepicker/src";
import { useColorScheme } from "nativewind";

const CalendarBottomSheet = ({
  bottomSheetRef,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
}) => {
  const { colorScheme } = useColorScheme();
  const bgColor = colorScheme == "dark" ? "#1f2022" : "#fff";
  const textHeaderColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
  const textDefaultColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
  const cardColor = colorScheme == "dark" ? "#14151a" : "#F4F4F9";

  const today = new Date();
  const startDate = getFormatedDate(today, "YYYY/MM/DD");
  const [selectedDate, setSelectedDate] = useState(startDate);

  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={["60%"]} enablePanDownToClose backgroundStyle={{backgroundColor: bgColor}} handleIndicatorStyle={{backgroundColor:"#d3fd55"}}>
      <BottomSheetView
        style={[styles.contentContainer, { backgroundColor: bgColor }]}
      >
        <View className="w-full">
          <DatePicker
            mode="calendar"
            minimumDate={startDate}
            selected={selectedDate}
            onDateChange={(date) => {
              setSelectedDate(date);
            }}
            options={{
              backgroundColor: bgColor,
              textHeaderColor: textHeaderColor,
              textDefaultColor: textDefaultColor,
              selectedTextColor: "#1F1F1F",
              mainColor: "#d3fd55",
            }}
          />
        </View>
        <View className="flex-row gap-[1rem] px-[.5rem]">
          <Pressable
            style={[
              styles.buttons,
              styles.cancelButton,
              { backgroundColor: cardColor },
            ]}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <Text className="text-center text-[1.2rem] font-bold text-primary">
              Cerrar
            </Text>
          </Pressable>
          <Pressable
            style={[styles.buttons, styles.acceptButton, { flex: 1 }]}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <Text className="text-center text-[1.2rem] font-bold text-primary-light-text">
              Aceptar
            </Text>
          </Pressable>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // paddingHorizontal: 10,
    alignItems: "center",
  },
  buttons: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  cancelButton: {},
  acceptButton: {
    backgroundColor: "#d3fd55",
  },
});

export default CalendarBottomSheet;
