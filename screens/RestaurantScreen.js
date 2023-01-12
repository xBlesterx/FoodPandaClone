import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <View>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-60 bg-gray-300 rounded-t-lg"
          />
          <TouchableOpacity
            className="absolute top-10 left-2 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#E5097F" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="bg-white px-3 pt-3">
            <Text className="text-3xl font-bold ">{title}</Text>
            <View className="px-2 pt-1.5 space-y-1">
              <View className="flex-row space-x-2 my-1 items-center">
                <StarIcon size={20} color="green" opacity={0.5} />
                <Text className="text-green-500 opacity-50">
                  {rating} . <Text className="text-gray-500">{genre}</Text>
                </Text>
                <MapPinIcon size={20} color="gray" opacity={0.4} />
                <Text className="text-gray-500">{address.slice(0, 35)}</Text>
              </View>
              <Text className="text-gray-500 pb-4 mt-2">
                {short_description}
              </Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center border-y space-x-2 border-gray-300 p-4">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text className="pl-2 flex-1 text-base font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#E5097F" />
          </TouchableOpacity>
        </View>
        <View className="pb-32">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/*DishRows*/}
          {dishes.map((dishes) => (
            <DishRow
              key={dishes._id}
              id={dishes._id}
              name={dishes.name}
              description={dishes.short_description}
              price={dishes.price}
              image={dishes.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
