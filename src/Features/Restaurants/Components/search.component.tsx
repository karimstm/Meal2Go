import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { SearchContainer } from "./search.style";

type SearchProps = {
  isFavouriteToggled: boolean;
  onFavouriteToggle: () => void | Promise<any>;
};

export const Search: React.FC<SearchProps> = ({
  isFavouriteToggled,
  onFavouriteToggle,
}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState<string>(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        onChangeText={setSearchTerm}
        placeholder="Search for a location"
        value={searchTerm}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
      />
    </SearchContainer>
  );
};
