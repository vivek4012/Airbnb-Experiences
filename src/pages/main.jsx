import React from "react";
import data from "../data2"
import Navbar from "../components/main-page/navbar";
import Imagecorousal from "../components/main-page/imagecorousal";
import Mobile from "../components/main-page/Mobile";
import PC from "../components/main-page/PC"; 
import ScrollToTop from "../components/main-page/Scroll";
import Bottom from "../components/main-page/Bottom";




function Main(props) {

let international = "international"
let india = "india"
let popular= "popular"

  return (
    <div>
      <ScrollToTop/>

      <Navbar
        set1={props.set1}
        set2={props.set2}
        set3={props.set3}
        set4={props.set4}
        set5={props.set5}
        set6={props.set6}
        set7={props.set7}
        set8={props.set8}
        symbol={props.symbol}
        multiple={props.multiple}
      />
      <Imagecorousal />
      <PC data={data} multiple={props.multiple} symbol={props.symbol} type={international} />
      <Mobile data={data} multiple={props.multiple} symbol={props.symbol}  type={international}/>
      <PC data={data} multiple={props.multiple} symbol={props.symbol} type={india}/>
      <Mobile data={data} multiple={props.multiple} symbol={props.symbol}  type={india}/>
      <PC data={data} multiple={props.multiple} symbol={props.symbol} type={popular}/>
      <Mobile data={data} multiple={props.multiple} symbol={props.symbol}  type={popular}/>
      <Bottom/>
    </div>
  );
}

export default Main;
