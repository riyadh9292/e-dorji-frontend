import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export default function DesignCard({ design }) {
  const dispatch = useDispatch();
  const id = design._id;
  return (
    <div className="relative overflow-hidden bg-no-repeat bg-cover w-40 h-80 border border-[#e6e6e6] ">
      <img
        className="w-full h-40 hover:scale-110 transition duration-300 ease-in-out"
        src={`http://localhost:4000/images/${design.file}`}
      />
      <p className="p-2 text-center">{design.title}</p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: design._id,
              title: design.title,
            })
          )
        }
        className="bg-[#f39422] text-white font-bold text-lg p-2 rounded"
      >
        Get now
      </button>
    </div>
  );
}
