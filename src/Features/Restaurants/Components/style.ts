import styled from "styled-components/native";
import { Card as NativeCard } from "react-native-paper";

export const Card = styled(NativeCard)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.sizes[0]};
`;

export const Cover = styled(NativeCard.Cover)`
  color: red;
  border-top-left-radius: ${({ theme }) => theme.sizes[0]};
  border-top-right-radius: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const Open = styled.View`
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  flex-direction: row;
`;

export const RadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
