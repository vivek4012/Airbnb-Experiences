import React from "react";
import * as Icon from "react-bootstrap-icons";
 
function Host2(props) {
  return (
    <div className="my-6 " >
      <div className="flex items-center my-6 ">
        <Icon.HandThumbsUp className="scale-[2] "/>
        <div className=" mx-8">
          <div className="font-bold">Excellent value</div>
          <div className=" text-gray-600">Guests say it's well worth the price.</div>
        </div>
      </div>
      <div className="flex items-center my-6 ">
        <Icon.ChatLeftText className="scale-[2]"/>

        <div className=" mx-8">
          <div className="font-bold">Super storytelling</div>
          <div className="text-gray-600">Guests say this Host tells great stories.</div>
        </div>
      </div>
    </div>
  );
}

export default Host2;
