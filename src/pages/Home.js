import React from "react";
import SimpleSlider from "../components/Carousel";
import RecipeReviewCard from "../components/CustomerCard";
import PrimarySearchAppBar from "../components/Header";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";
import Paralax from "../components/paralax/Paralax";

const bounceAnimation = keyframes`${bounce}`;
export const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="flex gap-10">
            <SimpleSlider />
            <div>
              <BouncyDiv>
                <h1 className="text-[40px] text-[#1976d2] font-bold tracking-wide capitalize pb-12">
                  BE OUR DELIGHTFUL CLIENTS
                </h1>
              </BouncyDiv>

              <div className="grid grid-cols-2 gap-4 ">
                <RecipeReviewCard />
                <RecipeReviewCard imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjyVki1u4VhBIzZIRtAucnVBuDUvivWuBSQ&usqp=CAU" />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 py-10">
            <RecipeReviewCard imagePath="https://blog.hubspot.com/hs-fs/hubfs/custoemr%20success%20manager.jpg?width=595&height=400&name=custoemr%20success%20manager.jpg" />
            <RecipeReviewCard imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzr8CUUjwt9NlU511deSB1qYqNFPCgNvrOCPvNYVVMPnUrGkR6CuMG8XwbCIqmqIEQh8&usqp=CAU" />
            <RecipeReviewCard imagePath="https://blog.hubspot.com/hs-fs/hubfs/custoemr%20success%20manager.jpg?width=595&height=400&name=custoemr%20success%20manager.jpg" />
            <RecipeReviewCard imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzr8CUUjwt9NlU511deSB1qYqNFPCgNvrOCPvNYVVMPnUrGkR6CuMG8XwbCIqmqIEQh8&usqp=CAU" />
          </div>
          <Paralax />
        </PrimarySearchAppBar>
        <div>
          <div>
            <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
