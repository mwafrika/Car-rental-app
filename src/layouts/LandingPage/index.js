import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import image from "../../image/4.jpg";

const LandingPage = ({ heading, ...otherProps }) => {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col">
        <Header />
        <div
          className="relative flex items-center justify-center h-full
          bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{ backgroundImage: `url(${image})` }}
        >
          {heading && (
            <h1 className="relative px-2.5 text-white uppercase z-10 text-center text-4xl md:text-6xl">
              {heading}
            </h1>
          )}
          <div className="z-0 absolute -top-0 -left-0 h-full w-full opacity-30 bg-black" />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto">{otherProps.children}</div>
      <Footer />
    </div>
  );
};

LandingPage.defaultProps = {
  heading: "",
};
export default LandingPage;
