import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
const AddMorePost: React.FC<AddMorePostProps> = ({ handleClose, open }) => {
  return (
    <>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            height: "50vh",
            outline: "none",
            bgcolor: "white",
            borderRadius: 2,
            m: "70px auto",
          }}>
          <Typography variant="h6" textAlign={"center"} color={"gray"} p={2}>
            Create Post
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={2} m={2}>
            <Avatar src="img2.jpg" alt="john doe" />
            <Typography>John Doe</Typography>
          </Box>
          <Box m={3}>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={2}
              placeholder="your status"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <Stack direction={"row"} spacing={2} mt={2}>
              <AddAPhotoIcon fontSize="large" color="secondary" />
              <InsertPhotoIcon fontSize="large" color="warning" />
              <VideoCameraBackIcon fontSize="large" color="primary" />
            </Stack>
            <ButtonGroup
              variant="contained"
              aria-label="Basic button group"
              fullWidth
              sx={{ mt: 2 }}>
              <Button>post</Button>
              <Button sx={{ flex: 1, px: 5 }}>
                <DateRangeIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddMorePost;
