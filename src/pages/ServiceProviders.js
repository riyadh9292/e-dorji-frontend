import React from "react";
import PrimarySearchAppBar from "../components/Header";

import Footer from "../components/Footer";
import ServiceProvider from "../components/service-providers/ServiceProvider";

export default function ServiceProviders() {
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="grid grid-cols-4 gap-10">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                {" "}
                <ServiceProvider />
              </div>
            ))}
          </div>
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
