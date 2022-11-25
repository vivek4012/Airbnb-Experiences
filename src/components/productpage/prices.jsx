import React from "react";
import * as Icon from "react-bootstrap-icons";

function Prices(props) { 
  
    const handelClick = () => {
        props.setoverlay((x) => !x);
      };
    
  return (
    <div className="prices ">
      <div className="flex items-center pb-4">
        <Icon.XCircle className="scale-[1.5] hover:cursor-pointer" onClick={handelClick}/>
        <div className="font-bold  m-auto ">Price breakdown</div>
      </div>
      <hr />
      <div className="bold py-2">Individual prices  in {props.symbol}</div>
      <div className="flex justify-between py-2">
        <div>adult</div>
        <div>{props.priceadult*props.multiple}  {props.symbol}</div>
      </div> 
      <div className="flex justify-between py-2">
        <div>children</div>
        <div>{props.pricechildren*props.multiple} {props.symbol}</div>
      </div>
      <div className=" flex justify-between py-2">
        <div>infant</div>
        <div>{props.priceinfant*props.multiple} {props.symbol}</div>
      </div>
      <hr/>
      <div className="bold">Private group</div>
      <div className="flex justify-between py-2">
        <div>Up to 4 guests</div>
        <div>{props.groupprice} {props.symbol}</div>
      </div>
    </div>
  );
}

export default Prices;
