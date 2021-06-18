import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import {
  AuthenticationContextProvider,
  AuthenticationContext,
} from "./src/services/auth/authentication.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infastructure/navigation";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDThcNFM3f1ZsKu_ArfCS7p_YsO3VdWiWg",
  authDomain: "meals2go-2321b.firebaseapp.com",
  projectId: "meals2go-2321b",
  storageBucket: "meals2go-2321b.appspot.com",
  messagingSenderId: "879961515029",
  appId: "1:879961515029:web:b0f55a0849444679a5da1c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("sorasenpaimoutik@gmail.com", "moutik94")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
                <ExpoStatusBar style="auto" />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
