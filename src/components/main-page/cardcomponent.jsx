 
import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../firebase';
import * as Icon from "react-bootstrap-icons";


function Card(props) {
  const [fav, isfav] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [counter, setCounter] = useState(100);
   
  const user = useAuth()
  
  function asd(){
    if(user){
      clickhandel()
    }
    else{
      {props.onClick(true)}
      }
     
  }
  const counter2 = Math.floor(counter / 10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
     
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isShown && counter]);

  const clickhandel = () => {
    isfav((x) => !x);
  };
  
  return (
    <div>
     <Icon.Heart
        className={
          fav
            ? "hidden"
            : "relative block top-[2rem] left-[9rem] hover:scale-[1.25] hover:cursor-pointer"
        }
        onClick=  {asd}
        fill="white"
      />
      <Icon.HeartFill
        className={
          fav
            ? "relative top-[2rem] left-[9rem] hover:scale-[1.25] hover:cursor-pointer block"
            : " hidden "
        }
        onClick=   {asd}
        fill="red"
      />
      <Link to={`/products/${props.id1}`} 
            draggable="true"  
        >
      <div
        className="w-[11rem]  mx-auto hover:cursor-pointer  mr-[4rem]"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="h-[18rem]      " >
          <img
            className="w-full h-[100%] object-cover  rounded-md pointer-events-none "
            src={props.images[counter2 % 5].URL}
          ></img>
        </div>
        <div className="flex items-center mt-1">
          <Icon.StarFill className="mr-1" />
          <div>  {props.ratings} </div>
          <div className="text-slate-400 mr-1"> {props.rating} </div>
          <div className="text-slate-400 mr-1"> {props.place}</div>
        </div>
        <div className="titel font">{props.title}</div>
        <div className="flex mt-1 ">
          <div className="font-bold">from </div>
          <div className="font-bold mx-1">{props.symbol} </div>

          <div className="font-bold">{props.priceadult*props.multiple}</div>

          <div>/person</div>
        </div>
      </div>
        </Link>
       
    </div>
  );
}

export default Card;
