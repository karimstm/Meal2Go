import React, { useContext } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";
import { Search } from "../Components/search.component";
import { RestaurantList, LoadingView, Spinner } from "./style";
import { Spacer, SafeArea } from "../../../components";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";

interface IRestaurantsScreen {
  navigation: any;
}

export const RestaurantsScreen: React.FC<IRestaurantsScreen> = ({
  navigation,
}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Spinner animating={true} size={50} color={Colors.blue300} />
        </LoadingView>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={(item: any) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetails")}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item.item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item?.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
