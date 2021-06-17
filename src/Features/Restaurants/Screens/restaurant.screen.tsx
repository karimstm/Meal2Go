import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";
import { Search } from "../Components/search.component";
import { RestaurantList, LoadingView, Spinner } from "./style";
import { Spacer, SafeArea, FavouritesBar } from "../../../components";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

interface IRestaurantsScreen {
  navigation: any;
}

export const RestaurantsScreen: React.FC<IRestaurantsScreen> = ({
  navigation,
}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Spinner animating={true} size={50} color={Colors.blue300} />
        </LoadingView>
      )}
      <Search
        isFavouriteToggled={isToggled}
        onFavouriteToggle={() => setIsToggled((v) => !v)}
      />
      {isToggled && (
        <FavouritesBar
          onNavigate={navigation.navigate}
          favourites={favourites}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }: { item: any }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
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
