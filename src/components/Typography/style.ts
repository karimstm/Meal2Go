import styled, { DefaultTheme } from "styled-components/native";

const defaultTextStyles = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const caption = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme: DefaultTheme) => `
    color: ${theme.colors.text.error};
`;

const label = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.medium};
`;

type VariantProps = {
  [key: string]: (theme: DefaultTheme) => string;
};

const variants: VariantProps = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text<{ variant: string }>`
  ${({ theme }) => defaultTextStyles(theme)};
  ${({ variant, theme }) => variants[variant](theme)}
`;
