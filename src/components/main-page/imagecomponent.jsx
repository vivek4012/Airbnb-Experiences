import React from "react";

function imagecomponent(props) {
  return (
    <div>
      <div className=" w-[50vw] h-[50vh] relative md:w-[30vw] md:h-[40vh] mx-2 mb-12">
        <img
          src={props.img}
          className=" object-cover w-full h-full rounded-xl pointer-events-none"
        />
        <div className="absolute top-0 p-4 flex flex-col justify-between h-[100%]">
          <div>
            <div className=" text-white ">collection</div>
            <div className=" text-xl font-bold text-white mt-2 ">
              {props.title}
            </div>
          </div>
          <div className="bg-white w-20 px-2 py-1 rounded  hover:cursor-pointer"> show all </div>
        </div>
      </div>
    </div>
  );
}

export default imagecomponent;
