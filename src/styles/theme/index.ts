import { DefaultTheme } from "styled-components";

export const theme = {
  color: "#fff",
};

export function combineTheme(): DefaultTheme {
  return { ...theme };
}
