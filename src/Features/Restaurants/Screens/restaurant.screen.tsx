import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";
import { SafeArea, SearchContainer, ListContainer } from "./style";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="search" value="" />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfo />
    </ListContainer>
  </SafeArea>
);
