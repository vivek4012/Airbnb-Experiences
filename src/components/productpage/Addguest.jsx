import React from "react";
import * as Icon from "react-bootstrap-icons";

function Addguest(props) {
  const decr = () => {
    props.b((x) => x - 1);
  };
  const incr = () => {
    props.b((x) => x + 1);
  };

  return (
    <div className=" ">
      <div className="my-3  flex justify-between items-center">
        <div className="w-20">
          <div className="font-bold">{props.name}</div>
          <div className="text-xs">{props.age}</div>
        </div>
      
         <Icon.DashCircle onClick={() => decr() }/>
       
        <div> {props.a}</div>
        <Icon.PlusCircle  onClick={() => incr() }/>

      </div>
    </div>
  );
}

export default Addguest;
 
// }