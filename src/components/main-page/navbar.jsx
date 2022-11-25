import {useRef,useState} from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Search from "./search";
import data from "../../data2";
 

function Navbar(props) {
  const [currencymemo, setcurrencymemo] =  useState(false);
  const [isshown, setisshown] =  useState(false);
  const [isshown2, setisshown2] =  useState(false);
  const [search,setsearch] = useState("");
  const [close3, setclose3] =  useState(false);
const input = useRef()

const keys =["title","host","title2","place"]

 function query(e){
  setsearch(e.target.value)
  search1(data)

  if (e.target.value.length>1){
    setisshown2(true)
    setclose3(true)
  }else{
    setisshown2(false)
  }
 }

 function search1 (data) {
  return data.filter(
    (item)=>
   keys.some(key=>item[key].toLowerCase().includes(search))
  )
 }
 
 const search2= search1(data)
 const comp = search2.map((x) => {
  return (
    <Search
  image={x.images[0].URL}
  title={x.title }
  title2={x.host }
  id1={x.id1}
  key={x.id1}

    />
  );
});
  function change1() {
    {
      props.set1();
    }
  }
  function change2() {
    {
      props.set2();
    }
  }
  function change3() {
    {
      props.set3();
    }
  }
  function change4() {
    {
      props.set4();
    }
  }
  function change5() {
    {
      props.set5();
    }
  }
  function change6() {
    {
      props.set6();
    }
  }
  function change7() {
    {
      props.set7();
    }
  }
  function change8() {
    {
      props.set8();
    }
  }

  const click = () => {
    setisshown((x) => !x);
  };

  function close() {
    setcurrencymemo((x) => !x);
  }
  function close2() {
    setclose3(false)
    setisshown2(false)
    input.current.value=""
  }
  return (
    <div className=" xl:w-[80rem]  m-auto w-11/12 2xl:w-[100rem]">
      <div className={close3?"fixed top-0 bottom-0 left-0 right-0 z-30  ":"hidden"} onClick={close2}></div>
      <div className="flex mt-4 mx-6 md:my-3 justify-between item-center">
      <Link to={"/"} > 
        <div className="hover:cursor-pointer">
          <img
            src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
            alt=""
            className="w-8 focus:border-slate-800"
          />
        </div>
        </Link>
        <div className=" relative  flex  items-center md:space-x-4 space-x-1">
        <input placeholder="search" ref={input} className="border border-solid border-slate-400 rounded  hidden  md:block  " 
           onChange={query}/>
         <div className={isshown2?"bg-white w-[180%] right-0 md:w-fit p-4 rounded absolute top-[100px] z-40 md:top-[40px] md:right-[120px] shadow-lg ":"hidden"}>
          
         {comp}

          </div> 
          <div className="  rounded-full py-1 px-3 hover:bg-slate-100 hover:cursor-pointer hover:drop-shadow-2xl hover: border-solid hover:border hover:border-slate-300 hidden md:block ">
            Become a Host
          </div>
          <div>
            <Icon.Globe
              className="scale-150 mx-4 hover:cursor-pointer  "
              onClick={close}
            />
            <div
              className={
                currencymemo
                  ? "fixed top-0 bottom-0 left-0 right-0 bg-black/[.6] z-20"
                  : "hidden"
              }
            >
              <div className="bg-white mt-[20rem] rounded m-auto w-fit p-4">
                <div className="flex items-center">
                  <div> please select the currency </div>
                  <Icon.XCircle
                    className="hover:cursor-pointer ml-4"
                    onClick={close}
                  />
                </div>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change1}
                >
                  INR
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change2}
                >
                  HKD
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change3}
                >
                  EUR
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change4}
                >
                  PKR
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change5}
                >
                  NPR
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change6}
                >
                  LKR
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change7}
                >
                  BDT
                </button>
                <button
                  className="border rounded border-solid border-black px-2"
                  onClick={change8}
                >
                  USD
                </button>
              <div> currency selected {props.symbol} </div>
              </div>
            </div>
          </div>
          <div
            className=" flex w-20 bg-white rounded-full justify-between border-solid border border-slate-300 drop-shadow-md hover:cursor-pointer hover:drop-shadow-2xl"
            onClick={click}
          >
            <Icon.List className="scale-150 ml-3.5 my-3" />
            <Icon.PersonFill className="scale-150 mr-3.5 my-3" />
          </div>
          <div
            className={
              isshown
                ? "w-[250px]   absolute bg-white top-[3rem] right-0 z-10 block rounded-xl drop-shadow-2xl p-4"
                : "hidden"
            }
          >
            <Link to="signup">
              <div className="py-2 hover:cursor-pointer hover:bg-slate-100">
                Sign up
              </div>
            </Link>

            <Link to="login">
              <div className="py-2 hover:cursor-pointer hover:bg-slate-100">
                login
              </div>
            </Link>
            <hr />
            <Link to="filter">

            <div className="py-2 hover:cursor-pointer hover:bg-slate-100">
              filter
            </div>
            </Link>
            <div className="py-2 hover:cursor-pointer hover:bg-slate-100">
              help
            </div>
          </div>
        </div>
      </div>
        <input placeholder="search" ref={input} className=" mt-2 border w-full border-solid border-slate-400 rounded block md:hidden" 
           onChange={query}/>
    </div>
  );
}

export default Navbar;
