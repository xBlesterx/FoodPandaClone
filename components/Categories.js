import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { urlFor } from "../sanity";
import sanityClient from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type=="category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((data) => (
        <CategoriesCard
          key={data._id}
          imgUrl={urlFor(data.image).url()}
          title={data.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
