import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories card */}
      <CategoryCard
        imgUrl="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
        title="card 1"
      />
      <CategoryCard
        imgUrl="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
        title="card 2"
      />
      <CategoryCard
        imgUrl="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
        title="card 3"
      />
      <CategoryCard
        imgUrl="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
        title="card 4"
      />
      <CategoryCard
        imgUrl="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
        title="card 5"
      />
    </ScrollView>
  );
};

export default Categories;
