import { React, useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

function Navbar(props) {
 
  const [counter, setCounter] = useState(1);
  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-screen md:hidden">
      <div className=" flex relative top-4 z-10 justify-between">
        <div>
        <Link to= "/" >
          <Icon.ArrowLeftSquareFill className="scale-150  ml-4 " />
          </Link>
        </div>

        <div className="flex">
          <Icon.ShareFill className="mx-4" />
          <Icon.Heart className="mx-4" />
        </div>
      </div>

      <div className="  flex items-center justify-between">
        <div className="relative top-60 z-10 sm:top-96 ">
          <Icon.ArrowLeftCircle className="scale-150 ml-4" onClick={minus} />
        </div>
        <div className="relative top-60 z-10 sm:top-96">
          <Icon.ArrowRightCircle
            className="scale-150 mr-4 hover:cursor-pointer"
            onClick={plus}
          />
        </div>
      </div>
      <img
        className="  relative w-screen bottom-8"
        src={props.images[counter%5].URL}
      />
    </div>
  );
}

export default Navbar;
