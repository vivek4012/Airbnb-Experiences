import React from "react";
import ScrollToTop from "../components/main-page/Scroll";
import Navbar from "../components/productpage/navbar";
import Navbarxl from "../components/productpage/navbarxl";
import Title from "../components/productpage/title";
import Imagegallery from "../components/productpage/imagegallery";
import Split from '../components/productpage/split';
import Aboutexperiances from "../components/productpage/aboutexperiances";
import Commentsmobile from '../components/productpage/commentsmobile';
import Commentspc from '../components/productpage/commentspc';
import Randommobile from "../components/productpage/randommobile"
import Randompc from "../components/productpage/randompc"
import Datemobile from '../components/productpage/datemobile2';
import Bottom from "../components/main-page/Bottom";
import data2 from "../data2";
import { useParams } from "react-router-dom";

function Product(props) {
  const { productId } = useParams();
  const data = data2.find(find2);

  function find2(item) {
    return item.id1 === productId * 1;
  }
  return (
    <div>
      <ScrollToTop />
      <Navbar images={data.images} />
      <Navbarxl set={props.set} set2={props.set2} set3={props.set3} set4={props.set4} set5={props.set5} set6={props.set6} set7={props.set7} set8={props.set8} symbol={props.symbol} /> 
      <Title ratings={data.ratings} rating={data.rating} place={data.place} title={data.title}/>
      <Imagegallery images={data.images}/>
      <Split multiple={props.multiple} symbol={props.symbol} hostimg={data.hostimg} language={data.language}  time={data.time} host={data.host}
        what1={data.what1}     what2={data.what2}     what3={data.what3}  groupprice={data.groupprice} bring1={data.bring1} bring2={data.bring2} 
        hostsince={data.hostsince} rating={data.rating} priceadult={data.priceadult} pricechildren={data.pricechildren} 
        priceinfant={data.priceinfant} host2={data.host2} id1={data.id1}
        /> 
                <Aboutexperiances/>
        < Commentsmobile ratings={data.ratings} comments={data.comments} rating={data.rating}/>
        <Commentspc ratings={data.ratings} comments={data.comments} rating={data.rating}/>
        <Datemobile date={data.date} multiple={props.multiple}  priceadult={data.priceadult} symbol={props.symbol}/>
   
        <Randommobile data={data2} multiple={props.multiple} symbol={props.symbol}/>
        <Randompc data={data2} multiple={props.multiple} symbol={props.symbol}/>
        <Bottom/> 
    </div>
  );
}

export default Product;
