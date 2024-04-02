import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
    colors: {
      TrueYellow: "rgba(235, 255, 0, 1)",
    },
  }

  const Theme = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  export default Theme;
