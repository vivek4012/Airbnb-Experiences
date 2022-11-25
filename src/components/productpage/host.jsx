import React from "react";

  
function title(props) {
  return (
    <div className="flex justify-between my-6">
      <div className="title-card">
        <div className=" font-semibold text-2xl">Online experience hosted by {props.host}</div>
        <div className="title-discription mt-2">{props.time}   mins . Hosted in {props.language}</div>
      </div>
      <div className="w-[52px] h-[52px] ">
        <img
          className=" rounded-full w-full h-[75%] xl:h-[100%] md:mr-10 object-cover"
          src={props.hostimg}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default title;
