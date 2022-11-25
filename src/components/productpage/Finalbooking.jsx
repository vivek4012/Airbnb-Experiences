import React from "react";
import { Link } from "react-router-dom";

function finalbooking(props) {

    let a=""
    if(props.day===1){a="mon"}
    if(props.day===2){a="tue"}
    if(props.day===3){a="wed"}
    if(props.day===4){a="thu"}
    if(props.day===5){a="fri"}
    if(props.day===6){a="sat"}
    if(props.day===0){a="sun"}
 let b="" 
 if(props.month===0){b="jan"}
 if(props.month===1){b="feb"}
 if(props.month===2){b="mar"}
 if(props.month===3){b="apr"}
 if(props.month===4){b="may"}
 if(props.month===5){b="jun"}
 if(props.month===6){b="july"}
 if(props.month===7){b="aug"}
 if(props.month===8){b="sep"}
 if(props.month===9){b="oct"}
 if(props.month===10){b="nov"}
 if(props.month===11){b="dec"}
 


  return (
    <div className="choose5 xl:flex justify-between my-6 ">
      <div >
        <div className="bold font-bold">{a}, {props.date} {b}</div>
        <div className="small py-1 margin55">{props.time}</div>
        <div className="text-xs underline font-bold  "> Book for a private group</div>
      </div>
      <div>
        <div>total =  {props.price} {props.symbol}</div>
        <Link to={`/confirmation/${props.id1}/${props.a}/${props.b}/${props.c}/${props.date}/${props.time}/${b}/${props.multiple}/${props.symbol}/`} >
        <button className="bg-red-500 px-2 py-1 rounded ">choose</button>
        </Link>
      </div>
    </div>
  );
}

export default finalbooking;
