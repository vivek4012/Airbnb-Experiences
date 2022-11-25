import React from "react";
import Host from "./host";
import Host2 from "./host2";
import Host3 from "./host3";
import Host4 from "./host4";
import Host5 from "./host5";
import Host6 from "./host6";
import Booking from "./booking";

function split(props) {
  
  return (
    <div className="xl:w-[80rem]  m-auto w-11/12 flex mt-6 xl:mt-10">
      <div className=" md:w-2/3 w-full">
        <hr />
        <Host hostimg={props.hostimg} language={props.language}  time={props.time} host={props.host}/>
        <hr />
        <Host2/>
       <hr/>
        <Host3      what1={props.what1}     what2={props.what2}     what3={props.what3}/>
        <hr/>
        <Host4 host={props.host}  groupprice={props.groupprice} symbol={props.symbol}  multiple={props.multiple}/>
        <hr/>
        <Host5 bring1={props.bring1} bring2={props.bring2}/>
        <hr/>
        <Host6 hostsince={props.hostsince} host={props.host} rating={props.rating} host2={props.host2} hostimg={props.hostimg}/>

        <hr/>
      </div>
      <div className="w-1/3 hidden md:block">
        <Booking groupprice={props.groupprice} priceadult={props.priceadult} pricechildren={props.pricechildren} 
            priceinfant={props.priceinfant} multiple={props.multiple} symbol={props.symbol} id1={props.id1}/>
        </div>
    </div>
  );
}

export default split;
