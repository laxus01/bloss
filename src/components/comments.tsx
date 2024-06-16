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

export const Comments = ({saveComment}: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");

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
          <div>
            <h1>Text Saver</h1>
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Escribe algo aquí..."
            />
            <Button onClick={() => {
                saveComment(text);
                setOpen(false);
            }

            }> Save </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
