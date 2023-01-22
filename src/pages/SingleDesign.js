import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SingleDesign() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [design, setDesign] = useState("");

  const getDesign = async () => {
    const res = await axios.get(`http://localhost:4000/designs/${id}`);
    console.log(res);
    setDesign(res?.data?.design);
  };

  useEffect(() => {
    getDesign();
  }, [id]);
  console.log(design, "design");
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="h-screen">
            <div className="flex">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="bg-[#f39422] text-white font-bold text-lg p-2 px-6 rounded "
              >
                <ArrowBackIosIcon />
                Back
              </button>
            </div>

            <div>
              <p className="pt-10 px-4 text-5xl font-extrabold text-primary pb-4">
                {design?.title}
              </p>
              <img
                className="h-[500px] border border-[#e6e6e6] rounded-md w-full"
                src={`http://localhost:4000/images/${design?.file}`}
              />
              <p className="py-10 text-left">
                {design?.description ||
                  "Today is one of the happiest days of my life, I officially registered my first land purchase today. First investment of my life in Dhaka City, Allah fulfilled a big dream at this young age, thank you. Life, death and health are all in the hands of Allah. If I stay alive and healthy, wanna do something big in life, lets see how far can go!!"}
              </p>
            </div>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: design._id,
                    title: design.title,
                  })
                );
                navigate(-1);
              }}
              className="bg-[#f39422] text-white font-bold text-lg p-2 rounded "
            >
              Add to Cart
            </button>
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
