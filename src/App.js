import "./App.css";
import * as React from "react";
import PrimarySearchAppBar from "./components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Login from "./components/Login";
import Signup from "./components/Register";
import { ImCross } from "react-icons/im";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  border: "2px solid #eeeeee",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  return (
    <div className="App">
      <PrimarySearchAppBar
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
      />
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > */}

        <Modal
          open={openRegister}
          onClose={() => {
            setOpenRegister(false);
          }}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ImCross
              onClick={() => setOpenRegister(false)}
              className="text-red-600 absolute right-8 cursor-pointer"
            />
            <Signup />
          </Box>
        </Modal>

        <Modal
          open={openLogin}
          onClose={() => setOpenLogin(false)}
          onBackdropClick={() => setOpenLogin(false)}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ImCross
              onClick={() => setOpenLogin(false)}
              className="text-red-600 absolute right-8 cursor-pointer"
            />
            <Login />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
