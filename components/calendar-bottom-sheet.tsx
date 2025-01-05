import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const CalendarBottomSheet = ({bottomSheetRef}: {bottomSheetRef: React.RefObject<BottomSheetMethods>}) => {
  // ref

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
			index={-1}
      snapPoints={["50%"]}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
				<Pressable onPress={() => bottomSheetRef.current?.close()}><Text>Cerrar</Text></Pressable>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default CalendarBottomSheet;
