import React from "react";
import { Platform } from "react-native";
import { EPlatform } from "../../utils/platforms";

import { Text } from "../Typography/text.component";
import { CompactImage, CompactWebView, Item } from "./style";

const isAndroid = Platform.OS === EPlatform.ANDROID;

interface ICompactRestaurantInfo {
  restaurant: any;
  isMap?: boolean;
}

export const CompactRestaurantInfo: React.FC<ICompactRestaurantInfo> = ({
  restaurant,
  isMap = false,
}) => {
  return (
    <Item>
      {isAndroid && isMap ? (
        <CompactWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
