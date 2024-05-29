import React from "react";
import { images } from "../../images";
import { ImageList, ImageListItem } from "@mui/material";

const ImageLists: React.FC<ImageListsProps> = ({ className }) => {
  return (
    <>
      <ImageList
        sx={{ width: "full", height: 200, objectFit: "cover" }}
        cols={3}
        rowHeight={100}
        gap={4}
        className={className}>
        {images.map((item) => (
          <ImageListItem key={item.image}>
            <img
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageLists;
