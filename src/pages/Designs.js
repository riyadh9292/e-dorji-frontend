import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";

export default function Designs() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [designs, setDesigns] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    // console.log({ title, image });
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    console.log(formData);
    fetch("http://localhost:4000/designs/file-upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4000/designs/", {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id: data?.design?._id, title }),
        })
          .then((res) => getDesigns())
          .catch((err) => console.log(err, "err"));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getDesigns = async () => {
    const res = await axios.get("http://localhost:4000/designs/");
    console.log(res, "designs");
    setDesigns(res?.data?.design);
    // fetch("http://localhost:4000/designs/", {
    //   method: "GET",
    //   headers: { "Content-type": "application/json" },
    // })
    //   .then((res) => {
    //     setDesigns(res?.data);
    //     console.log(res, "res from getting design");
    //   })
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
  };
  useEffect(() => {
    getDesigns();
  }, []);
  console.log("designs", designs);
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="my-20 grid grid-cols-4 gap-10">
            {designs?.map((design) => {
              return (
                <div className="" key={design._id}>
                  <DesignCard design={design} />
                </div>
              );
            })}
          </div>
          Designs designs table
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-x-20">
              <label>title</label>
              <input
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="focus:outline-none border border-[#e6e6e6] "
              />
            </div>
            <div className="flex items-center gap-x-20">
              <label>image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="focus:outline-none border border-[#e6e6e6] "
              />
            </div>
            <button type="submit">add</button>
          </form>
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
