import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 px-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      ></ScrollView>
    </View>
  );
};

export default FeaturedRow;
