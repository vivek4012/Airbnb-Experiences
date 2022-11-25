import React from "react";
import data from "../../data2";
import { Link } from "react-router-dom";

function search(props) {

  return (
    <Link to={`/products/${props.id1}`} > 
    <div className="flex my-4 shadow-black hover:bg-slate-200">
      <div className="w-16 h-16 mr-2">
        <img src={props.image} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-bold"> {props.title}</div>
        <div className="text-s"> hosted by :{props.title2}</div>
      </div>
    </div>
    </Link>
  );
}

export default search;
