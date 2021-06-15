import styled from "styled-components/native";

type IPosition = "top" | "bottom" | "left" | "right";
type ISize = "small" | "medium" | "large";

const SizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const getVariant = (position: IPosition, size: ISize, space: string[]) => {
  return `${positionVariant[position]}: ${space[SizeVariant[size]]}`;
};

export const CustomSpacer = styled.View<{
  pposition: IPosition;
  size: ISize;
  theme: any;
}>`
  ${({ pposition, size, theme }) => getVariant(pposition, size, theme.space)};
`;
