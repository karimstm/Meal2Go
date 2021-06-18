import React from "react";
import { Text } from "../../../components";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Text variant="body">Karim</Text>
      </AccountContainer>
    </AccountBackground>
  );
};
