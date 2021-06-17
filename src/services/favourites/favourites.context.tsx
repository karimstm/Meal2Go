import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IFavourites } from "../../types/favourites";

interface IFavouritesContext {
  favourites: IFavourites[];
  addToFavourites: (item: any) => void;
  removeFavourites: (item: any) => void;
}

export const FavouritesContext = createContext<IFavouritesContext>({
  favourites: [],
  addToFavourites: () => {},
  removeFavourites: () => {},
});

export const FavouritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favourites, setFavourites] = useState<IFavourites[]>([]);

  const saveFavourites = async (value: IFavourites[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant: any) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavourites = favourites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
