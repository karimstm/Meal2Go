import "styled-components/native";
import { ITheme } from "../infastructure/theme";

declare module "styled-components/native" {
  /* tslint:disable */
  export interface DefaultTheme extends ITheme {}
}
