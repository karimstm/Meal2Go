import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { SearchContainer } from "./search.style";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState<string>(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        onChangeText={setSearchTerm}
        placeholder="Search for a location"
        icon="map"
        value={searchTerm}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
      />
    </SearchContainer>
  );
};
