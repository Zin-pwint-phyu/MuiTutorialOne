import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import AddMorePost from "./AddMorePost";
import React, { useState } from "react";

const AddButton = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="AddMore"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 20px)", md: 30 },
        }}>
        <Fab color="primary" aria-label="add">
          <Add onClick={handleOpen} />
        </Fab>
      </Tooltip>
      <AddMorePost handleClose={handleClose} open={open} />
    </>
  );
};

export default AddButton;
