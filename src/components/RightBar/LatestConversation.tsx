import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { images } from "../../images";

const LatestConversation: React.FC<ImageListsProps> = ({ className }) => {
  return (
    <>
      <List
        sx={{
          //   width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          height: "100px",
          margin: 0,
        }}
        className={className}>
        {images.map((item) => (
          <ListItem alignItems="flex-start" key={item.id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={item.image} />
            </ListItemAvatar>
            <ListItemText
              sx={{ fontSize: "0.5rem" }}
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default LatestConversation;
