import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useColorScheme } from "nativewind";
import DateTimePicker from "@react-native-community/datetimepicker";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { BlurView, BlurViewProps } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  startOfToday,
  subDays,
} from "date-fns";
import PagerView from "react-native-pager-view";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const IMG_HEIGHT = 300;

const CreateNewAppointment = () => {
  const headerHeight = Constants.statusBarHeight;
  const { colorScheme } = useColorScheme();
  const bgColor = colorScheme == "dark" ? "#14151a" : "#F4F4F9";
  const placeholderColor = colorScheme == "dark" ? "#B0B0B0" : "#6D6D6D";
  const textHeaderColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";
  const textDefaultColor = colorScheme == "dark" ? "#FFFFFF" : "#1F1F1F";

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openClock, setOpenClock] = useState(false);

  // return (
  //   <>
  //     <View style={{ paddingTop: headerHeight }} className="bg-theme container h-full">
  //       <View className="p-[1.5rem]">
  //         <Text className="text-primary self-center text-[1.5rem] font-bold">
  //           Nueva Cita
  //         </Text>
  //         <Pressable
  //           onPress={() => {
  //             router.back();
  //           }}
  //           className="bg-red absolute self-end  mt-[1rem] right-[1rem] px-[1rem] py-[.5rem] rounded-md"
  //         >
  //           <Text className="text-white">Cancelar</Text>
  //         </Pressable>
  //       </View>
  //       {/* Form */}
  //       <View className="gap-[1rem] mt-[.5rem]">
  //         <View className="gap-[.5rem]">
  //           <Text className="text-primary">Nombre cliente (Opcional)</Text>
  //           <TextInput
  //             className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
  //             placeholder="Cliente"
  //             placeholderTextColor={placeholderColor}
  //             placeholderClassName="text-secondary"
  //           />
  //         </View>
  //         <View className="gap-[.5rem]">
  //           <Text className="text-primary">Precio</Text>
  //           <TextInput
  //             keyboardType="number-pad"
  //             className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
  //             placeholder="C$ 100"
  //             placeholderTextColor={placeholderColor}
  //             placeholderClassName="text-secondary"
  //           />
  //         </View>
  //         <View className="gap-[.5rem]">
  //           <Text className="text-primary">Dia de la cita</Text>
  //           <Pressable onPress={() => setOpenCalendar(true)}>
  //             <TextInput
  //               className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
  //               value={Intl.DateTimeFormat("es-ES", {
  //                 weekday: "long",
  //                 day: "2-digit",
  //                 month: "long",
  //                 year: "numeric",
  //               }).format(new Date())}
  //               editable={false}
  //               selectTextOnFocus={false}
  //               placeholderTextColor={placeholderColor}
  //               placeholderClassName="text-secondary"
  //             />
  //           </Pressable>
  //         </View>
  //         <View className="gap-[.5rem]">
  //           <Text className="text-primary">Hora de la cita</Text>
  //           <Pressable onPress={() => setOpenClock(true)}>
  //             <TextInput
  //               className="bg-card text-primary rounded-md px-[1rem] py-[.5rem]"
  //               value={Intl.DateTimeFormat("es-ES", {
  //                 hour: "2-digit",
  //                 minute: "2-digit",
  //                 hour12: true,
  //               }).format(new Date())}
  //               editable={false}
  //               selectTextOnFocus={false}
  //               placeholderTextColor={placeholderColor}
  //               placeholderClassName="text-secondary"
  //             />
  //           </Pressable>
  //         </View>
  //       </View>
  //     </View>
  //     {openCalendar && (
  //       <DateTimePicker
  //         mode="date"
  //         value={new Date()}
  //         minimumDate={new Date()}
  //         onChange={(e) => {
  //           if (["set", "dismissed", "neutralButtonPressed"].includes(e.type)) {
  //             setOpenCalendar(false)
  //           }
  //         }}
  //       />
  //     )}
  //     {openClock && (
  //       <DateTimePicker
  //         mode="time"
  //         value={new Date()}
  //         onChange={(e) => {
  //           if (["set", "dismissed", "neutralButtonPressed"].includes(e.type)) {
  //             setOpenClock(false)
  //           }
  //         }}
  //       />
  //     )}
  //   </>
  // );

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

  // const headerAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 2], [0, 0.6]),
  //   };
  // });

  // // Blur
  // const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  // const blurIntensity = useAnimatedProps<BlurViewProps>(() => {
  //   return {
  //     intensity: interpolate(
  //       scrollOffset.value,
  //       [0, IMG_HEIGHT / 2],
  //       [0, 100],
  //       Extrapolation.CLAMP
  //     ),
  //   };
  // });

  const dates = eachWeekOfInterval(
    {
      start: new Date(),
      end: addDays(new Date(), 14),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc: Date[][], cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);

  const [activeDate, setActiveDate] = useState(startOfToday().toString());

  return (
    <View className="h-full">
      {/* <Stack.Screen
        options={{
          headerTitle: "Crear Cita",
          headerTitleAlign: "center",
          headerBackground: () => (
            // <Animated.View
            //   style={[
            //     { backgroundColor: bgColor, height: 100 },
            //     headerAnimatedStyle,
            //   ]}
            // >
            // </Animated.View>
              <AnimatedBlurView
                animatedProps={blurIntensity}
                // intensity={100}
                experimentalBlurMethod={"dimezisBlurView"}
                tint="dark"
                style={{ height: 100}}
              />
          ),
        }}
      /> */}
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        className="bg-theme"
      >
        <AnimatedImageBackground
          source={require("./../assets/barber-banner.png")}
          className={`w-full`}
          style={[{ height: IMG_HEIGHT }, imageAnimatedStyle]}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]}
            className="h-full"
          >
            <View style={{ paddingTop: headerHeight }} className=" container">
              <Pressable
                className="mt-[.5rem] px-[.6rem] py-[.5rem] bg-theme self-start rounded-lg"
                onPress={() => {
                  router.back();
                }}
              >
                <MaterialIcons
                  name="arrow-back"
                  size={20}
                  color={textDefaultColor}
                />
              </Pressable>
            </View>
            <View className="container flex-1 justify-end flex-row gap-[.5rem] pb-[2.5rem]">
              <View className="self-end flex-row justify-center items-center gap-[.5rem] px-[.5rem] py-[.2rem] rounded-full bg-[#d3fd55]">
                <MaterialIcons
                  name="access-time-filled"
                  size={20}
                  color="#062f06"
                />
                <Text className="text-[#062f06] font-bold text-[1.3rem]">
                  11:00 Am
                </Text>
              </View>
              <View className="self-end flex-row justify-center items-center gap-[.5rem] px-[.5rem] py-[.2rem] rounded-full bg-theme">
                <MaterialIcons
                  name="calendar-month"
                  size={20}
                  color={textDefaultColor}
                />
                <Text className="text-primary font-bold text-[1.3rem]">
                  {Intl.DateTimeFormat('es-ES', {day: "2-digit", month: 'long', year: 'numeric'}).format(new Date(activeDate)).toString()}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </AnimatedImageBackground>
        {/* <Animated.Image
          source={require("./../assets/barber-banner.png")}
          className={`w-full`}
          style={[{ height: IMG_HEIGHT }, imageAnimatedStyle]}
        /> */}
        {/* Crear Cita */}
        <View className=" bg-theme container rounded-t-2xl -mt-[1rem] ">
          <Text className="text-primary text-[2.5rem] text-center my-[1rem] font-bold">
            Crear Cita
          </Text>
          {/* Fecha */}
          <Text className="uppercase text-secondary mb-[.5rem]">fecha</Text>
          <PagerView style={{ flex: 1, height: 70 }}>
            {dates.map((week, i) => (
              <View key={i} className="flex-row gap-[.5rem]">
                {week.map((day) => (
                  <Pressable
                    onPress={() => setActiveDate(day.toString())}
                    disabled={new Date(day) < startOfToday()}
                    key={day.toString()}
                    className={`flex-1 py-[1rem] rounded-2xl ${
                      activeDate == day.toString() ? "bg-[#d3fd55]" : "bg-card"
                    } ${new Date(day) < startOfToday() && "opacity-25"}`}
                  >
                    <Text
                      className={`text-center capitalize ${
                        activeDate == day.toString()
                          ? "text-secondary-light-text"
                          : "text-secondary"
                      }`}
                    >
                      {Intl.DateTimeFormat("es-ES", {
                        weekday: "short",
                      }).format(day)}
                    </Text>
                    <Text
                      className={`text-center font-bold text-[1.2rem] ${
                        activeDate == day.toString()
                          ? "text-primary-light-text"
                          : "text-primary"
                      }`}
                    >
                      {Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(
                        day
                      )}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ))}
          </PagerView>
          {/* Hora */}
          <Text className="uppercase text-secondary my-[.5rem]">hora</Text>
          <FlatList
            className=""
            scrollEnabled={false}
            columnWrapperStyle={{ gap: 10 }}
            numColumns={2}
            data={[
              "8:00 am",
              "8:30 am",
              "9:00 am",
              "8:00 am",
              "9:30 am",
              "10:00 am",
              "10:30 am",
              "11:00 am",
              "11:30 am",
            ]}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({ item }: { item: string }) => (
              <Pressable className=" bg-card py-[1rem] flex-1 rounded-xl">
                <Text className=" text-primary font-bold text-center">
                  {item}
                </Text>
              </Pressable>
            )}
            contentContainerStyle={{
              gap: 10,
            }}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default CreateNewAppointment;
