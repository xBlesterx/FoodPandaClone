import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id] { 
            restaurants[]->{
              ...,
              dishes[]->
            }
          }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurants);
      });
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row items-center align-middle justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#E5097F" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*Resturantescard */}

        {restaurant?.map((restaurants) => (
          <RestaurantCard
            key={restaurants._id}
            id={restaurants._id}
            imgUrl={restaurants.image}
            title={restaurants.name}
            rating={restaurants.rating}
            genre={restaurants.name}
            address={restaurants.address}
            short_description={restaurants.short_description}
            dishes={restaurants.dishes}
            long={restaurants.long}
            lat={restaurants.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
