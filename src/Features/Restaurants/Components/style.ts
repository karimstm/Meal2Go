import styled from "styled-components/native";
import { Card as NativeCard } from "react-native-paper";

export const Title = styled.Text`
  padding: 16px;
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const Card = styled(NativeCard)`
  background-color: white;
  border-radius: 10px;
`;

export const Cover = styled(NativeCard.Cover)`
  color: red;
`;
