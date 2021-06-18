import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

interface IAuthContext {
  user: any;
  isLoading?: boolean;
  error: any;
  onLogin: (email: string, password: string) => void;
}

export const AuthenticationContext = createContext<IAuthContext>({
  user: null,
  isLoading: false,
  error: null,
  onLogin: () => {},
});

export const AuthenticationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null); //firebase.auth.UserCredential
  const [error, setError] = useState(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((loggedInUser) => {
        setUser(loggedInUser);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
