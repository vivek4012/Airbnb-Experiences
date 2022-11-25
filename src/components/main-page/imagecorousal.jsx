import React from "react";
import Imagecomponent from "./imagecomponent";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Imagecorousal(props) {
  const [width, setwidth] = useState(0);
  const commentscroll = useRef();

  useEffect(() => {
    setwidth(
      commentscroll.current.scrollWidth - commentscroll.current.offsetWidth
    );
  }, []);
  return (
    <div className="bg-slate-200  ">
    <div className="xl:w-[100rem]  m-auto w-11/12 my-4">
      <div className="text-3xl font-bold my-6 pt-5">
        welcome Airbnb Online Experiences
      </div>
      <motion.div className="overflow-hidden  ">
        <motion.div
          drag="x"
          ref={commentscroll}
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="flex ">
            <Imagecomponent title={"Most popular arround the world"}  img={" https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <Imagecomponent title={"Great for building team"}  img={"https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
            <Imagecomponent  title={"Fun for family"}  img={"https://images.pexels.com/photos/8063875/pexels-photo-8063875.jpeg?auto=compress&cs=tinysrgb&w=600"} />
            <Imagecomponent  title={" Most travelled Hosts"}  img={" https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}

export default Imagecorousal;
