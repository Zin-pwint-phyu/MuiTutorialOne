import { Box } from "@mui/material";
import React from "react";
import Post from "./ListItems/Post";
import { images } from "../images";

const Feed = () => {
  return (
    <Box sx={{ p: 2 }} flex={2} className="-mt-4">
      {images.map((item) => (
        <Post key={item.id} image={item.image} />
      ))}
    </Box>
  );
};

export default Feed;
