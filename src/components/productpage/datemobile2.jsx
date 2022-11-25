import React from "react";
import Datemobile from "./datemobile";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
 

function Datemobile2(props) {
 
  const [width, setwidth] = useState(0);
  const commentscroll = useRef();
 
const x = props.date.map((y)=>{
  return (
    <Datemobile  
    key={y.id}
    date={y.date}
    time={y.time}
    priceadult={props.priceadult}
    multiple={props.multiple} 
    symbol={props.symbol}
    />
   
  )
})
  useEffect(() => {
    setwidth(
      commentscroll.current.scrollWidth - commentscroll.current.offsetWidth
    );
  }, []);

  return (
    <div className="md:hidden ">
        <div className="font-bold text-xl ml-4">choose from available dates</div>
      <motion.div className="overflow-hidden  ">
        <motion.div
          drag="x"
          ref={commentscroll}
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="flex ">
          {x}
          
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Datemobile2;
