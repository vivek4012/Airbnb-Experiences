import React from "react";
import * as Icon from "react-bootstrap-icons";
 


function whatto(props) {
  return (
    <div className="my-3">
      <div className="font-bold text-xl my-3">What to bring</div>
      <div className="flex my-3 items-center">
        <Icon.CheckCircle className="scale-[2] ml-2 m-2" />
        <div className=" ml-6 m-2 w-[80%]">
          {props.bring1}
        </div>
      </div>
      <div className="flex my-3 items-center">
        <Icon.CheckCircle className="scale-[2] ml-2 m-2" />
        <div className=" ml-6 m-2 w-[80%]">
           {props.bring2}
        </div>
      </div>
    </div>
  );
}

export default whatto;
