import React from "react";
import Card from "../main-page/cardcomponent";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
function Card1(props) {
  
  const [log, setlog] = useState(false);

  const change = (x) => {
    setlog(x);
  };
  
  function change2() {
    setlog(false);
  }


  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
   
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  let comp3 = shuffle(props.data)
let comp2 = comp3.slice(0,11)

  const comp = comp2.map((x) => {
    return (
      <Card
    
      key={x.id1}
      multiple={props.multiple}
      symbol={props.symbol}
        onClick={change}
        priceadult={x.priceadult}
        title={x.title}
        place={x.place2}
        images={x.images}
        id1={x.id1}
        ratings={x.ratings}
        rating={x.rating}
         
      />
    );
  });
  const [width, setwidth] = useState(0);
  const commentscroll = useRef();

  useEffect(() => {
    setwidth(
      commentscroll.current.scrollWidth - commentscroll.current.offsetWidth
    );
  }, []);

 
  return (
    <div className="xl:w-[100rem]  m-auto w-11/12 md:hidden ">
       <div   className={  log  ? "fixed top-0 bottom-0 left-0 right-0 bg-black/[.6] z-20"   : "hidden"  }  >
        <div className="bg-white mt-[20rem] rounded m-auto w-fit p-4">
          <div className="flex items-center">
            <div> please login to create wishlist </div>
            <Icon.XCircle
              className="hover:cursor-pointer ml-4"
              onClick={change2}
            />
          </div>
          <Link to="login">
            <div className="hover:underline"> to login page </div>
          </Link>
        </div>
      </div>
      <div className="text-3xl font-bold my-6">More experiances</div>
      <motion.div className="overflow-hidden "  >
        <motion.div  
        
          drag="x"
          ref={commentscroll}
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="flex ">
          {comp}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card1;
