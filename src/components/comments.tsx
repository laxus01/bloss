import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Comments = ({ saveComment }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");
  const customTextArea = {
    width: "100%",
    height: "150px",
    padding: "10px",
    borderRadius: "5px",
    borderColor: "#ccc",
    fontSize: "16px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  }

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddCommentIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full">
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Comment"
              style={customTextArea}
            />
          </div>
          <div className="flex justify-center w-full">
            <Button
              onClick={() => {
                saveComment(text);
                setOpen(false);
                setText("");
              }}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
