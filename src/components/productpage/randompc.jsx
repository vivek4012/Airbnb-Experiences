import { React, useState } from "react";
import Slider from "react-slick";

import Card from "../main-page/cardcomponent2";

import "../main-page/arrow.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function App(props) {
  const [log, setlog] = useState(false);

  const change = (x) => {
    setlog(x);
  };

  function change2() {
    setlog(false);
  }
 
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
   
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  let comp3 = shuffle(props.data)
let comp2 = comp3.slice(0,11)


  const comp = comp2.map((x) => {
    return (
      <Card
        multiple={props.multiple}
        symbol={props.symbol}
        onClick={change}
        priceadult={x.priceadult}
        title={x.title}
        place={x.place2}
        images={x.images}
        ratings={x.ratings}
        rating={x.rating}
        key={x.id1}
        id1={x.id1}
      />
    );
  });

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-[80%] m-auto my-12 hidden md:block ">
      <div
        className={
          log
            ? "fixed top-0 bottom-0 left-0 right-0 bg-black/[.6] z-20"
            : "hidden"
        }
      >
        <div className="bg-white mt-[20rem] rounded m-auto w-fit p-4">
          <div className="flex items-center">
            <div> please login to create wishlist </div>
            <Icon.XCircle
              className="hover:cursor-pointer ml-4"
              onClick={change2}
            />
          </div>
          <Link to="login">
            <div className="hover:underline"> to login page </div>
          </Link>
        </div>
      </div>
      <div className="text-3xl font-bold my-6">More experiances</div>
      <Slider {...settings}>{comp}</Slider>
    </div>
  );
}

export default App;
