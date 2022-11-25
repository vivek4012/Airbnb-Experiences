import React from "react";
import * as Icon from "react-bootstrap-icons";
 


function host(props) {
  return (
    <div className="my-8">
      <div className="flex items-center  mb-4">
        <div className="w-20 h-20">

        <img
          className="w-full h-full object-cover rounded-full"
          src={props.hostimg}
          alt=""
        ></img>
        </div>
        <div className="ml-8">
          <div className="title font-bold text-xl">Meet your host, { props.host}</div>
          <div className="host">Host on Airbnb since { props.hostsince}</div>
        </div>
      </div>
      <div className="flex items-center my-4">
        <Icon.StarFill className="mr-4" />
        <div className=" mr-4">{props.rating} reviews</div>
        <Icon.ShieldExclamation  className="mr-4" />
        <div > Identity verified</div>
      </div>
      <div className="text-justify md:mr-10">
       { props.host2}
      </div>
      <div className="my-8">
        <button className="bg-white border border-solid border-slate-400 px-3 py-1 rounded">contact host </button>
      </div>
    </div>
  );
}

export default host;
