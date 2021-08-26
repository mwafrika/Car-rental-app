import React from "react";
import Photo from "../../image/2.jpg";
const Card = ({ ...otherProps }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center py-14">
      <div
        className="w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      "
      >
        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" alt="img" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="text-base font-bold">Title</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      "
      >
        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" alt="img" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="text-base font-bold">Title</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      "
      >
        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" alt="img" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="text-base font-bold">Title</span>
              </li>
              <li className="list-none">
                <span className="text-base">Description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
