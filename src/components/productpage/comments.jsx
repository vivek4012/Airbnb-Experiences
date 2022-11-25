import React from "react";

function comments(props) {
   
        return (
       
            <div className="p-2 xl:w-full  ">
              <div className=" border border-solid border-slate-400 px-3 py-1 rounded w-[18rem] md:border-0  md:w-full  xl:w-full">
                <div className="flex items-center  my-4">
                  <div className="w-16 h-16">

                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={props.URL}
                    alt=""
                  ></img>
                  </div>
                  <div className="ml-8">
                    <div className=" font-bold text-xl">{props.name}</div>
                    <div className="">{props.date}</div>
                  </div>
                </div>
                <div className="mb-4"> {props.comment}</div>
              </div>
            </div>
          );
  
 
}

export default comments;
