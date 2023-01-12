import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoriesCard = ({ imgUrl, title, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative mx-1 p-2  bg-[#E5097F] rounded-lg"
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        source={{ uri: imgUrl }}
        className=" h-16 w-24 rounded m-1"
        resizeMode="contain"
      />
      <Text className="absolute bottom-0 left-0 text-black px-1.5 py-0.5 text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
