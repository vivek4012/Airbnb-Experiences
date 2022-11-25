import React from "react";
import * as Icon from "react-bootstrap-icons";



function participate(props) {
  return (
    <div className="my-8 ">
      <div className=" py-4  font-bold text-2xl"> How to participate</div>
      <div className=" md:flex">
        <div className=" border border-solid border-slate-400 md:w-[30%] mt-3 p-4 rounded-lg md:mr-6">
          <Icon.Laptop className="scale-[2] ml-2 my-2"/>
          <div className="font-bold my-6">Join a video call</div>
          <p>
            Use Zoom to participate on your desktop or mobile device. After you
            book, you’ll receive an email with a link and details on how to
            join.
          </p>
        </div> 
        <div className=" border border-solid border-slate-400 md:w-[30%] mt-3 p-4 rounded-lg md:mr-6">
          <Icon.People className="scale-[2] ml-2 my-2"/>
          <div className="font-bold my-6">Book for a private group</div>
          <p>
         {props.host} can host private groups of any size, up to 500 guests. Private group rates start at {props.symbol} {props.groupprice*props.multiple}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default participate;
