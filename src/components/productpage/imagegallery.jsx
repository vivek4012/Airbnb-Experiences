import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
 

function Imagegallery(props) {
  const [img, setimg] = useState(1);
  const [modal, setmodal] = useState(false);

  const click = (a) => {
    setmodal(true);
    setimg(a);
  };
  const click2 = () => {
    setmodal(false);
  };
  const showall = () => {
    setmodal(true);
    setimg(0);
  };

  const click3 = () => {
    setimg((x) => x - 1);
  };
  const click4 = () => {
    setimg((x) => x + 1);
  };
  let x;
  if (img > 0) {
    x = img;
  } else {
    x = -img;
  }
  return (
    <div className="hidden md:block">
      <div
        className={
          modal
            ? "w-screen h-screen fixed top-0 left-0  bg-black opacity-1  visible overflow-hidden z-20  "
            : "w-screen h-screen fixed top-0 left-0  bg-black opacity-0  invisible overflow-hidden z-20  "
        }
      >
        <Icon.XCircleFill
          onClick={click2}
          fill="gray"
          className="relative top-8 mx-8 scale-[2] hover:scale-[3] hover:cursor-pointer"
        />
        <div className="flex justify-between w-screen relative top-10">
          <Icon.ArrowLeftCircle
            onClick={click3}
            fill="gray"
            className="mx-8 scale-[2.25] z-20 hover:scale-[3] hover:cursor-pointer my-[450px]"
          />
          <div className="max-h-[100vh] max-w-[64rem] ">

          <img src={props.images[x%5].URL} className="   object-cover w-full h-full"></img>
          </div>
          <Icon.ArrowRightCircle
            onClick={click4}
            fill="gray"
            className="mx-16 scale-[2.25]   z-20 hover:scale-[3] hover:cursor-pointer  my-[450px]"
          />
        </div>
      </div>
      <div className=" flex xl:h-[36rem] xl:w-[80rem]  m-auto w-11/12 h-[33%] mt-4">
        <div className=" w-1/3 pr-2" onClick={() => click(0)}>
          <img
            className=" w-full h-full object-cover rounded-l-xl"
            src={props.images[0].URL}
            alt=""
          />
        </div>
        <div className="w-1/3  pr-2" onClick={() => click(1)}>
          <img className=" w-full h-full object-cover " src={props.images[1].URL} alt="" />
        </div>
        <div className="  w-1/6  pr-2">
          <div
            className=" h-1/2   "
            onClick={() => click(2)}
          >
            <img className=" h-full w-full object-cover " src={props.images[2].URL} alt="" />
          </div>
          <div
            className=" h-1/2   pt-2 "
            onClick={() => click(3)}
          >
            <img className="w-full h-full object-cover  " src={props.images[3].URL} alt="" />
          </div>
        </div>
        <div className="w-1/3 " onClick={() => click(4)}>
          <img
            className=" w-full h-full  rounded-r-xl object-cover "
            src={props.images[4].URL}
            alt=""
          />
          <div className="scale-150 relative bottom-10 left-[60%] bg-white flex xl:w-[6.5rem] h-6 justify-between items-center rounded w-1/4 hover:cursor-pointer ">
            <div className="text-[0.4rem] ml-2 xl:text-[0.5rem]">show all images</div>
           <Icon.ArrowRight onClick={showall} className="xl:scale-150 mr-2" />
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Imagegallery;
