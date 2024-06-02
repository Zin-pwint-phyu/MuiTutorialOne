import {
  Group,
  Home,
  Pages,
  People,
  Settings,
  Shop,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
} from "@mui/material";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useMyContext } from "../../context";

const ListItems: React.FC = () => {
  const { mode, setMode } = useMyContext();
  const toggleMode: any = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ListItem>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#page">
          <ListItemIcon>
            <Pages />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <Shop />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <ToggleOnIcon fontSize="large" />
          </ListItemIcon>
          <Switch
            aria-label="Switch demo"
            checked={mode === "light"}
            onChange={toggleMode}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListItems;
