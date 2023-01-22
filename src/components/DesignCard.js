import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Modal from "@mui/material/Modal";
import CatalogCard from "./catalogue/CatalogCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DesignCard({ design }) {
  const dispatch = useDispatch();
  const id = design._id;
  const [open, setOpen] = React.useState(false);
  const [sizesForm, setSizesForm] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [catalogue, setCatalogue] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getCatalogues = async () => {
    const res = await axios.get("http://localhost:4000/catalogue/");
    console.log(res?.data?.catalogue, "catalogue");
    console.log(design?.productType, "design");
    setCatalogue(
      res?.data?.catalogue?.filter(
        (data) => data?.productType === design?.productType
      )
    );
  };
  useEffect(() => {
    getCatalogues();
  }, [design?._id]);
  console.log(catalogue, "catalogue");
  return (
    <div className="border-4 border-[#e6e6e6] rounded-t-lg">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1>Select from our designs</h1>
            {sizesForm ? (
              <div className="grid grid-cols-3 gap-10">
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>Age</p>
                  <input
                    placeholder="enter your age"
                    className="px-4 py-2 border border-[#e6e6e6] focus:outline-primary"
                  />
                </div>
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>Weight</p>
                  <input
                    className="px-4 py-2 border border-[#e6e6e6] focus:outline-primary"
                    placeholder="enter your weight"
                  />
                </div>
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>Chest size</p>
                  <input
                    className="px-4 py-2 border border-[#e6e6e6] focus:outline-primary"
                    placeholder="enter your chest size"
                  />
                </div>
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>Waist size</p>
                  <input
                    className="px-4 py-2 border border-[#e6e6e6] focus:outline-primary"
                    placeholder="enter your waist size"
                  />
                </div>
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>height</p>
                  <input
                    className="px-4 py-2 border border-[#e6e6e6] focus:outline-primary"
                    placeholder="enter your chest size"
                  />
                </div>
                <div className="border-4 border-primary text-center h-[200px] pt-14">
                  <p>Estimated delivery</p>
                  <input type="date" />
                </div>
              </div>
            ) : (
              <div className="max-h-[500px] overflow-y-auto">
                <div className="grid grid-cols-3 gap-4 py-2">
                  {catalogue?.map((x, index) => (
                    <div onClick={() => setSelected(index)} key={index}>
                      <CatalogCard
                        name={x?.title}
                        image={`http://localhost:4000/images/${x?.file}`}
                        selected={selected === index}
                      />
                    </div>
                  ))}{" "}
                </div>
              </div>
            )}
            <div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="accent-primary" />{" "}
                <h6>Get sizes from home</h6>
              </div>
              <div
                onClick={() => setSizesForm((prev) => !prev)}
                className="hover:underline cursor-pointer"
              >
                {sizesForm ? "Back" : "Click here to provide sizes"}
              </div>
            </div>
            <div className="flex items-center w-full justify-between pt-2">
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: design._id,
                      title: design.title,
                    })
                  );
                  handleClose();
                }}
                className="bg-[#f39422] text-white font-bold text-lg p-2 rounded "
              >
                Add to Cart
              </button>
              <div className="flex items-center gap-x-4">
                <p className="text-[#f39422] font-semibold">
                  Select your Custom one
                </p>
                <input type="file" />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="relative bg-[#fafafa] overflow-hidden  w-full h-80  mydivouter">
        <img
          className="w-full rounded-t-md h-40 hover:scale-110 transition duration-300 ease-in-out"
          src={`http://localhost:4000/images/${design.file}`}
        />

        <button
          onClick={handleOpen}
          // onClick={() =>
          //   dispatch(
          //     addToCart({
          //       id: design._id,
          //       title: design.title,
          //     })
          //   )
          // }
          className="bg-[#f39422] text-[#ffffff] font-bold text-lg p-2 px-6 rounded mybuttonoverlap btn btn-info"
        >
          Get now
        </button>
      </div>
      <p
        title={design.title}
        className="p-2 text-center text-2xl font-extrabold underline"
      >
        {design.title}
      </p>
      <p className="p-2 text-center text-[20px] text-gray">
        {design.description ||
          "gahhsvad dwgghqwegwq d adbqwqwjhwgfewg  fwediuwhrhew"}
      </p>
    </div>
  );
}
