import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { IFavourites } from "../../types/favourites";
import { CompactRestaurantInfo } from "../Restaurant/compact-restaurant-info";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../Typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar: React.FC<{
  favourites: IFavourites[];
  onNavigate: (...values: any) => void;
}> = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {favourites.map((restaurant: any) => {
          const key = restaurant.name.replace(/\s/g, "");
          return (
            <Spacer position="left" size="medium" key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
