import React from "react";
import { Box, List } from "@mui/material";
import ListItems from "./ListItems/ListItems";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          <ListItems />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
