import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white rounded  mr-3 shadow-lg pb-2"
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="  h-36 w-64 rounded-t-md"
      />

      <View className="px-2 space-y-1">
        <Text className="text-lg font-bold  pt-2">{title}</Text>
        <View className=" flex-row items-center space-x-1 px-1">
          <StarIcon color="green" size={15} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-600 ">{rating}</Text> . {genre}
          </Text>
          <Text>{}</Text>
        </View>
        <View className="px-1">
          <View className=" flex-row items-center">
            <MapPinIcon color="gray" size={15} opacity={0.5} />
            <Text className="text-gray-400">
              {" "}
              Nearby . {address.slice(0, 20)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
