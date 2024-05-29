import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { Search as SearchIcon } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { NotificationAdd } from "@mui/icons-material";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOnclick = () => {
    setOpen((current) => !current);
  };
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <EmojiNatureIcon
          sx={{ display: { xs: "block", sm: "none" } }}
          className="text-yellow-200"
        />
        <Box className="flex items-center bg-white text-gray-300 px-6 rounded">
          <SearchIcon />
          <InputBase placeholder="search..." className=" text-lg w-[300px]" />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          gap={2}>
          <Badge badgeContent={4} color="error">
            <MailIcon className="text-white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar
            src="img.jpg"
            onClick={handleOnclick}
            className="cursor-pointer"
          />
        </Box>
        <Box
          gap={2}
          alignItems={"center"}
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
          <Avatar
            src="img.jpg"
            onClick={handleOnclick}
            className="cursor-pointer"
          />
          <Typography variant="h6">John</Typography>
        </Box>
        <Menu
          id="basic-menu"
          open={open}
          onClose={handleOnclick}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ mt: 5 }}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
