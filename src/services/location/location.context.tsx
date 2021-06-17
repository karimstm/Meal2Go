import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext<any>(null);

export const LocationContextProvider: React.FC<{ children: React.ReactNode }> =
  ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword: string) => {
      setIsLoading(true);
      setKeyword(searchKeyword);
    };

    useEffect(() => {
      if (!keyword.length) {
        setIsLoading(false);
        return;
      }
      locationRequest(keyword.toLocaleLowerCase())
        .then(locationTransform)
        .then((res) => {
          setLocation(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }, [keyword]);

    return (
      <LocationContext.Provider
        value={{
          isLoading,
          error,
          location,
          search: onSearch,
          keyword,
        }}
      >
        {children}
      </LocationContext.Provider>
    );
  };
