import React from "react";
import PrimarySearchAppBar from "../components/Header";

import Footer from "../components/Footer";

export default function Experts() {
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar>
          <h1 className="text-4xl font-extrabold text-primary">Experts</h1>
        </PrimarySearchAppBar>
        <div className="pl-[300px]">
          <div className="flex items-start gap-4">
            <img
              src="https://www.tuhinhossainphotography.com/wp-content/themes/tuhin-photography/assets/img/fasion/large/1.jpg"
              className="w-[900px] h-full"
            />
            <p>
              A successful fashion consultant should have excellent
              communication and interpersonal skills to interact with clients
              and should be friendly, outgoing, and trustworthy. Ultimately, a
              top-notch fashion consultant should be a good multitasker and a
              great listener, have good time management skills, and be highly
              organized.
            </p>
          </div>
          <div className="flex items-start gap-4 pt-10">
            <p>
              A successful fashion consultant should have excellent
              communication and interpersonal skills to interact with clients
              and should be friendly, outgoing, and trustworthy. Ultimately, a
              top-notch fashion consultant should be a good multitasker and a
              great listener, have good time management skills, and be highly
              organized.
            </p>
            <img
              src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2017%2F02%2F10%2F405da68b46ce8a06b3d338eefbfea436-ty.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
              className="w-[900px] h-full"
            />
          </div>
          <div className="flex items-start gap-4 pt-10">
            <img
              src="https://new-media.dhakatribune.com/en/uploads/watermarked/1671021138270/denim-exports-to-the-us-see-3623-growth-in-jan-oct22-r121986.jpeg"
              className="w-[900px] h-full"
            />
            <p>
              A successful fashion consultant should have excellent
              communication and interpersonal skills to interact with clients
              and should be friendly, outgoing, and trustworthy. Ultimately, a
              top-notch fashion consultant should be a good multitasker and a
              great listener, have good time management skills, and be highly
              organized.
            </p>
          </div>
          <div className="flex items-start gap-4 pt-10">
            <p>
              A successful fashion consultant should have excellent
              communication and interpersonal skills to interact with clients
              and should be friendly, outgoing, and trustworthy. Ultimately, a
              top-notch fashion consultant should be a good multitasker and a
              great listener, have good time management skills, and be highly
              organized.
            </p>
            <img
              src="http://bdphotographers.com/blogs-and-news/wp-content/uploads/fashion3.jpg"
              className="w-[900px] h-full"
            />
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}
