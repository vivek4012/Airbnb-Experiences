import React from "react";
import * as Icon from "react-bootstrap-icons";


function Title(props) {
  return (
    <div className="xl:w-[80rem]  m-auto w-11/12">
      <div className="top2 ">
        <div className="hidden underline md:block">All Online Experiences</div>
        <div className="flex my-1 items-center">
          <div>
            <Icon.Globe className="mr-4" />
          </div>
          <div className="">ONLINE EXPERIENCE</div>

        </div>
          <div className="font-semibold text-2xl mb-4"> { props.title}</div>
        <div className="md:flex  items-center">
          <div className="flex space-x-4 items-center">
            <Icon.StarFill className="    " />
            <div className="">{props.ratings}</div>
            <div className="">{props.rating}</div>
            <div className="">.</div>
            <div> {props.place}</div>
          </div>
          <div className="flex items-center  ">
            <div className="hidden mx-4 md:block  ">.</div>
            <div className=" mr-4">Part of </div>
            <div> Airbnb Online Experiences</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
