import React from "react";
import PrimarySearchAppBar from "../components/Header";

import Footer from "../components/Footer";

export default function ServiceProviders() {
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          ServiceProviders
        </PrimarySearchAppBar>
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> */}
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}
