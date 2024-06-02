import {
  Box,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import AddButton from "./components/AddMore/AddButton";
import { useMyContext } from "./context";

const App: React.FC = () => {
  const { darkTheme } = useMyContext();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Box>
            <Stack direction={"row"} spacing={2}>
              <Sidebar />
              <Feed />
              <Rightbar />
            </Stack>
            <AddButton />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
