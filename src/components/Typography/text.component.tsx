import React from "react";
import { Text as Typography } from "./style";

type TextProps = {
  variant: "label" | "body" | "hint" | "error" | "caption";
};

export const Text: React.FC<TextProps> = ({ variant, children }) => (
  <Typography variant={variant}>{children}</Typography>
);

Text.defaultProps = {
  variant: "body",
};
