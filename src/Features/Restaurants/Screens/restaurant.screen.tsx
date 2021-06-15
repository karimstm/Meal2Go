import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";
import { SearchContainer, RestaurantList } from "./style";
import { Spacer, SafeArea } from "../../../components";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="search" value="" />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item: any) => item?.name}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
