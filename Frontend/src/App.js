import React from "react";
import { ThemeProvider } from '@material-ui/core';
import { theme } from '@styles';
import { BaseRouter } from '@components';
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseRouter />
    </ThemeProvider>
  );
}
