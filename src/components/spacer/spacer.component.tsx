import React, { FC } from "react";
import { CustomSpacer } from "./style";

type ISpacer = {
  position: "top" | "bottom" | "left" | "right";
  size: "small" | "medium" | "large";
};

export const Spacer: FC<ISpacer> = ({ position, size, children }) => {
  return (
    <CustomSpacer pposition={position} size={size}>
      {children}
    </CustomSpacer>
  );
};

// Spacer.defaultProps = {
//   position: "top",
//   size: "small",
// };
