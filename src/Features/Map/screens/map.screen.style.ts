import styled from "styled-components/native";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";

export const ContainerView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
  width: ${() => `${Dimensions.get("window").width}px`};
  height: ${() => `${Dimensions.get("window").height}px`};
`;
