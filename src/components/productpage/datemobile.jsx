import React from "react";
import { Link } from "react-router-dom";
import data2 from "../../data2"
import {  useParams } from 'react-router-dom';

function Datemobile(props) {
  const params = useParams();

  const productId = params.productId 
      const data = data2.find(find2);
 
       function find2 (item){
          return item.id1 === (productId*1)
       }
  return (
    <div className="m-4">
      <div className="choose5 flex justify-between my-6 w-[18rem] border border-solid border-black rounded-xl p-3 items-center ">
        <div>
          <div className="bold font-bold">Date: {props.date}</div>
          <div className="small py-1 margin55">Time: {props.time}</div>
          <div className="text-xs underline font-bold  ">
            Book for a private group
          </div>
        </div>
        <div>
          <div>price = {props.priceadult*props.multiple} {props.symbol}</div>
          <Link to={`/confirmation/${data.id1}/1/1/1/${props.date}/${props.time}/ /${props.multiple}/${props.symbol}/`} >
          <button className="bg-red-500 px-2 py-1 rounded ">choose</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Datemobile;
