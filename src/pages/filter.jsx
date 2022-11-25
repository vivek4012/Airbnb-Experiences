import Filtercomponent from "../components/filter/filtercomponent";
import * as React from "react";
import "../components/main-page/arrow.css"
function Filter(props) {

  return (
    <>
    <div >  


        <Filtercomponent multiple={props.multiple} symbol={props.symbol}   />
    </div>
    </>
  );
}

export default Filter;
