import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectBasketItems,
  removeFromBacket,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, items) => {
      (results[items.id] = results[items.id] || []).push(items);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  //console.log(groupedItemsInBasket);
  return (
    <SafeAreaView style={style.container} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#E5097F] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 left-5"
          >
            <XCircleIcon color="#E5097F" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <Text className="flex-1 ">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#E5097F]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([keys, items]) => (
            <View
              key={keys}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#E5097F]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#E5097F] text-xs"
                  onPress={() => dispatch(removeFromBacket({ id: keys }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row items-center">
            <Text className="flex-1 text-lg text-gray-400">Subtotal</Text>
            <Text className="font-extrabold text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="flex-1 text-lg text-gray-400">Delivery Fee</Text>
            <Text className="font-extrabold text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="flex-1 text-lg">Order Total</Text>
            <Text className="font-extrabold ">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#E5097F] p-4"
            onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <Text className="text-center text-white font-extrabold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 5,
  },
});

export default BasketScreen;
