import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { images } from "../images";
import ImageLists from "./RightBar/ImageList";
import LatestConversation from "./RightBar/LatestConversation";
const Rightbar = () => {
  return (
    <Box sx={{ p: 2, display: { xs: "none", sm: "block" } }} flex={1}>
      <Box position="fixed">
        <Typography textAlign={"center"} variant="h6" component={"h5"}>
          OnlineFriends
        </Typography>
        <AvatarGroup
          max={5}
          sx={{
            flexDirection: "row-reverse",
            justifyContent: "center",
          }}>
          {images.map((item) => (
            <Avatar key={item.id} alt={item.name} src={item.image} />
          ))}
        </AvatarGroup>
        <Box className="mt-2">
          <Typography variant="h6">Latest Photos</Typography>
          <ImageLists className="mt-1" />
        </Box>
        <Box mt={1}>
          <Typography component={"h6"}>Latest Conversations</Typography>
          <LatestConversation />
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
