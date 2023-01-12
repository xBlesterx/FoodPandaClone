import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'featured']{...,}`).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);
  return (
    <SafeAreaView style={style.container} className="bg-white pt-2">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-center">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1 ">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="text-xl font-bold  align-middle justify-center">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#E5097F" />
          </View>
        </View>
        <UserIcon size={35} color="#E5097F" />
      </View>
      {/*Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className=" flex-row space-x-3 align-middle justify-center items-center">
          <View className="flex-1 p-1 flex-row bg-gray-300 items-center rounded-lg ml-2">
            <MagnifyingGlassIcon size={18} color="#E5097F" />
            <TextInput
              className="rounded-lg p-1"
              placeholder="Restaurants and cuisines"
            />
          </View>
          <View className="mr-3">
            <AdjustmentsHorizontalIcon size={25} color="#E5097F" />
          </View>
        </View>
        {/*Categories*/}
        <Categories />
        {/*Featured Rows*/}
        {featuredCategories.map((data) => (
          <FeaturedRow
            key={data._id}
            id={data._id}
            title={data.name}
            description={data.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 5,
  },
});

export default HomeScreen;
