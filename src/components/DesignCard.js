import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
  const [selected, setSelected] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="border border-[#e6e6e6]">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1>Select from our designs</h1>
            <div className="max-h-[500px] overflow-y-auto">
              <div className="grid grid-cols-3 gap-4 py-2">
                {[...Array(10)].map((x, index) => (
                  <div onClick={() => setSelected(index)} key={index}>
                    <CatalogCard selected={selected === index} />
                  </div>
                ))}{" "}
              </div>
            </div>
            <div className="flex items-center w-full justify-between pt-2">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: design._id,
                      title: design.title,
                    })
                  )
                }
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
      <div className="relative overflow-hidden  w-full h-80  mydivouter">
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
          className="bg-[#f39422] text-white font-bold text-lg p-2 rounded mybuttonoverlap btn btn-info"
        >
          Get now
        </button>
      </div>
      <p className="p-2 text-center">{design.title}</p>
    </div>
  );
}
