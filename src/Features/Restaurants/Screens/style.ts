import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export const SearchContainer = styled.View`
  padding: 16px;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
