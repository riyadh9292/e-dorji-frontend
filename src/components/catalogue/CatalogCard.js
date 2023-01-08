import React from "react";

export default function CatalogCard({
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aCb7mlkxub0fnbCUNUP9oBWmrtHjE05vgDX_REzFd1IaJKS9Wooj6KHRIGlDpyHVgr8&usqp=CAU",
  name = "sari",
  selected,
}) {
  return (
    <div
      className={`p-4 border-4 ${
        selected ? "border-primary" : "border-gray-400"
      }  rounded-t-lg cursor-pointer`}
    >
      <div className="">
        <img
          src={image}
          alt="design"
          className="w-full  object-contain rounded-t-lg"
        />
      </div>
      <h2 className="text-xl font-semibold ">{name}</h2>
    </div>
  );
}
