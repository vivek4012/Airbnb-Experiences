import React from "react";
import * as Icon from "react-bootstrap-icons";

function aboutexperiances(props) {
  return (
    <div className="xl:w-[80rem]  m-auto w-11/12 flex mt-6 xl:mt-10 p-4">
      <div>
        <div className="font-bold text-3xl text-center mx-4 ">
          Airbnb Online Experiences
        </div>
        <div className="md:flex justify-between ">
          <div className="flex items-center md:max-w-[30%] my-8">
            <Icon.PersonFill className=" scale-[4] mr-8 md:scale-[6]" />
            <div className="mx-6 ">
              <div className="hidden md:block font-bold text-xl my-3 ">
                Thoughtful hosts
              </div>
              <div>
                Get to know hosts who share their expertise and a window into
                their world.
              </div>
            </div>
          </div>
          <div className="flex items-center md:max-w-[30%] my-8">
            <Icon.PersonCircle className=" scale-[4] mr-8 md:scale-[6]" />
            <div className="mx-6 ">
              <div className="hidden md:block font-bold text-xl my-3 ">
              Small-group activities
              </div>
              <div>
              Meet people from all over the world while learning something new together.
              </div>
            </div>
          </div>
          <div className="flex items-center md:max-w-[30%] my-8">
            <Icon.PcDisplay className=" scale-[3.5] mr-8 md:scale-[6]" />
            <div className="mx-6 ">
              <div className="hidden md:block font-bold text-xl my-3 ">
              Simple and global
              </div>
              <div>
              Join easily and participate from home without a lot of prep.
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default aboutexperiances;
