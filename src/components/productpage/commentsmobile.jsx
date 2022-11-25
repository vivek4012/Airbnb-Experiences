import React from "react";
import Comments from "./comments";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";



function X(props) {
  const [width, setwidth] = useState(0);
  const commentscroll = useRef();
 
 const a= props.comments.map((x)=>{
  return (
    {...x , comment:`${x.comment.substring(0,120)}...`}
  )
 })

 
 
  useEffect(() => {
    setwidth(
      commentscroll.current.scrollWidth - commentscroll.current.offsetWidth
    );
  }, []);
  const com = a.map((x) => {
    return (
      <Comments
        key={x.id}
        name={x.name}
        URL={x.URL}
        date={x.date}
        comment={x.comment}
      />
    );
  });
  return (
    <div>
      <div className="flex items-center ml-6 mb-4 md:hidden">
        <Icon.StarFill className="scale-[2] mr-6" />
        <div className="font-bold text-2xl"> 4.99 (146 reviews)</div>
      </div>
      <motion.div className="overflow-hidden md:hidden ml-2">
        <motion.div
          drag="x"
          ref={commentscroll}
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="flex ">{com}</motion.div>
        </motion.div>
      </motion.div>
      <div className="bg-white border border-solid border-slate-400 px-3 py-1 rounded w-fit my-6 hover:cursor-pointer md:hidden ml-4"> Show all comments</div>
    </div>
  );
}

export default X;
