import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Addguest from "./Addguest";
import Finalbooking from "./Finalbooking";
import Prices from "./prices";
import * as Icon from "react-bootstrap-icons";
import "./booking.css";

function Booking(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [overlay, setoverlay] = useState(false);
  const [overlay2, setoverlay2] = useState(false);
  const [scroll, setscroll] = React.useState(false);
  const [scroll2, setscroll2] = React.useState(false);
  const [scroll3, setscroll3] = React.useState(1);
  const [countAdult, setcountAdult] = React.useState(0);
  const [countChildren, setcountChildren] = React.useState(0);
  const [countInfant, setcountInfant] = React.useState(0);

  let scroll4;
  if (scroll3 === 1) {
    scroll4 =
      " border border-solid relative  border-slate-400  rounded-lg md:ml-5 xl:ml-20 p-6";
  }
  if (scroll3 === 2) {
    scroll4 =
      " border border-solid fixed top-[10%] xl:w-[26%] 2xl:w-[18%]  border-slate-400  rounded-lg  xl:ml-20 p-6 ";
  }
  if (scroll3 === 3) {
    scroll4 =
      " border border-solid relative mt-[900px] border-slate-400  rounded-lg md:ml-5 xl:ml-20 p-6";
  }

  const handelClick = () => {
    setoverlay((x) => !x);
    if (window.scrollY < 500) {
      setscroll(false);
    } else {
      setscroll(true);
    }
  };

  const handelClick2 = () => {
    setoverlay2(true);
    if (window.scrollY < 500) {
      setscroll2(false);
    } else {
      setscroll2(true);
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY < 500) {
        setscroll2(false);
      } else {
        setscroll2(true);
      }
      if (window.scrollY < 500) {
        setscroll(false);
      } else {
        setscroll(true);
      }

      if (window.scrollY < 730) {
        setscroll3(1);
      }
      if (window.scrollY > 730 && window.scrollY < 1600) {
        setscroll3(2);
      }
      if (window.scrollY > 1600) {
        setscroll3(3);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className={scroll4}>
        <div className="flex items-center">
          <div className="price">
            from {props.multiple * props.priceadult} {props.symbol}
          </div>
          <div>/person</div>
        </div>
        <div className="underline hover:cursor-pointer" onClick={handelClick2}>
          Show all prices
        </div>
        <div
          className={
            overlay2
              ? scroll2
                ? "  block w-[400px] absolute bg-white z-20 border border-black border-solid rounded-md p-4 right-0"
                : " top-[-250px] block w-[400px]  absolute bg-white z-20 border border-black border-solid rounded-md p-4 right-0 "
              : "hidden"
          }
        >
          <Prices
            setoverlay={setoverlay2}
            groupprice={props.groupprice}
            priceadult={props.priceadult}
            pricechildren={props.pricechildren}
            priceinfant={props.priceinfant}
            multiple={props.multiple}
            symbol={props.symbol}
          />
        </div>
        <div
          className={
            overlay2
              ? "fixed top-0 bottom-0 left-0 right-0 block "
              : "fixed top-0 bottom-0 left-0 right-0 hidden"
          }
          onClick={() => setoverlay2(false)}
        ></div>
        <div className="flex">
          <div className="w-1/2 borderleft">
            <div className="relative top-6 z-10 left-7 pointer-events-none">
              DATES
            </div>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Icon.ArrowDown className="relative bottom-9 left-32 hidden xl:block pointer-events-none" />
          </div>
          <div
            className={
              overlay
                ? "w-1/2 border-2 border-solid border-slate-600 relative top-[24px]  h-[60px] rounded-br-lg rounded-tr-lg cursor-pointer"
                : "cursor-pointer rounded-br-lg w-1/2 border border-solid border-slate-600 h-[60px] relative top-[24px] rounded-tr-lg "
            }
            onClick={handelClick}
          >
            <div
              className={
                overlay
                  ? "fixed block top-0 left-0 bottom-0 right-0 "
                  : "overlay hidden top-0 left-0 bottom-0 right-0"
              }
              onClick={() => handelClick}
            ></div>

            <div className="guests ml-4 xl:ml-8">GUESTS</div>
            <div className="flex items-center ">
              <div className="font-bold xl:ml-8">
                {countAdult + countChildren + countInfant} guests
              </div>
              <Icon.ArrowDown className="xl:mr-3" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={
              overlay
                ? scroll
                  ? "block justify-items-end rounded-xl border border-black border-solid absolute xl:absolute xl:right-0 xl:top-[-40px] top-[-20px]  bg-white w-[400px] p-4  right-[0px]"
                  : "block justify-items-end rounded-xl border border-black border-solid absolute xl:absolute xl:right-0 xl:top-[-300px] top-[-300px]  bg-white w-[400px] p-4  right-[0px]"
                : " hidden "
            }
          >
            <Addguest
              name="adult"
              age="age above 12"
              ini={5}
              a={countAdult}
              b={setcountAdult}
            />
            <Addguest
              name="children"
              age="Age 2  to 12"
              ini={6}
              a={countChildren}
              b={setcountChildren}
            />
            <Addguest
              name="infants"
              age="age below 2"
              ini={7}
              a={countInfant}
              b={setcountInfant}
            />
          </div>

          <div className="dummyparent">
            <Finalbooking
              a={countAdult}
              b={countChildren}
              c={countInfant}
              id1={props.id1}
              symbol={props.symbol}
              date={startDate.getDate(Date)}
              day={startDate.getDay(Date)}
              month={startDate.getMonth(Date)}
              time="8:30 am - 9:00 am (IST)"
              price={
                countAdult * props.priceadult * props.multiple +
                countChildren * props.pricechildren * props.multiple +
                props.priceinfant * countInfant * props.multiple
              }
              multiple={props.multiple}
              
            />
            <hr />
            <Finalbooking
              a={countAdult}
              b={countChildren}
              c={countInfant}
              id1={props.id1}
              symbol={props.symbol}
              date={startDate.getDate(Date)}
              day={startDate.getDay(Date)}
              month={startDate.getMonth(Date)}
              price={
                countAdult * props.priceadult * props.multiple +
                countChildren * props.pricechildren * props.multiple +
                props.priceinfant * countInfant * props.multiple
              }
              time="11:30 am -12:00 pm (IST)"
              multiple={props.multiple}

            />
            <hr />
            <Finalbooking
              a={countAdult}
              b={countChildren}
              c={countInfant}
              id1={props.id1}
              symbol={props.symbol}
              date={startDate.getDate(Date)}
              day={startDate.getDay(Date)}
              month={startDate.getMonth(Date)}
              price={
                countAdult * props.priceadult * props.multiple +
                countChildren * props.pricechildren * props.multiple +
                props.priceinfant * countInfant * props.multiple
              }
              time="4:30 pm - 5:00 pm (IST)"
              multiple={props.multiple}

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
