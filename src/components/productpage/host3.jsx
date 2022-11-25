import { React, useState } from "react";
 


function Fulldiscription(props) {
  const [Readmore, Setreadmore] = useState(false);
  const [button, setbutton] = useState(true);
  const click7 = () => {
    Setreadmore((x) => !x);
    setbutton((y) => !y);
  };

  return (
    <div className=" md:mr-10 my-8">
      <div className="font-bold text-2xl my-4">What you'll do</div>
      
      <div className="text-justify my-4">{props.what1}</div>

      {Readmore && <div className="pop">
        
        <p className="text-justify my-4">{props.what2}</p>

        <p className="text-justify my-4">{props.what3}</p>
        </div>}

      <button className="bg-white border border-solid border-slate-400 px-3 py-1 rounded" onClick={click7}>{button ? "Read More" : "Read Less"}</button>
    </div>
  );
}

export default Fulldiscription;
