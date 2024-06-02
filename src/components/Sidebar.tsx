import React from "react";
import { Box, List } from "@mui/material";
import ListItems from "./ListItems/ListItems";

const Sidebar: React.FC = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, p: { sm: 0 } }}>
      <Box position={"fixed"}>
        <List>
          <ListItems />
        </List>
      </Box>
      {/* <AddButton /> */}
    </Box>
  );
};

export default Sidebar;
