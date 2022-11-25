import React from 'react';
import data2 from "../data2"
import {  useParams } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";


function Confirmation(props) {
    const params = useParams();

const productId = params.productId 
    const data = data2.find(find2);

     function find2 (item){
        return item.id1 === (productId*1)
     }
    
    return (
        <>
        <div  className="  xl:w-[70rem] mt-4 m-auto w-11/12">
          <div className='w-14 h-14'>
            <img className='w-full h-full ' src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"></img>
          </div>
        </div>
        <div   className="  xl:w-[70rem] mt-4 m-auto w-11/12 flex ">
            <div className='flex items-center'>
            <Link to={`/products/${data.id1}`} >
            <Icon.ArrowLeftCircle className='scale-[1.50] '/>
</Link>
            <div className=' font-bold text-3xl mx-6'>Confirm and pay</div>
            </div>
        </div>
        <div className='xl:w-[70rem] mt-4 m-auto w-11/12 xl:flex' >
            <div className='  xl:w-[50%] w-[100%]  h-full flex p-4 border border-solid border-black rounded-xl justify-between'>
                <div className='w-[50%] xl:w-[30%]  '>
                    <img src={data.images[0].URL} className="h-full w-full object-cover rounded-xl" ></img>
                </div>
                <div className='my-auto'>
                    <div className="  mr-8">{data.title}</div>
                    <div  className="my-2">{data.title2}</div>
                    <div className='flex items-center my-2'>
                        <Icon.Star className='mr-3'/>
                    <div className='mr-3'>{data.ratings}</div>
                    <div className='mr-3'>{data.rating}</div>
                    </div>
                </div>
                </div>
            <div className=' xl:w-[50%] w-[100%] h-full p-4'>
                
                <div>total adults : {params.a}</div>
                <div>total childrens : {params.b}</div>
                <div>total infants : {params.c}</div>
                <div>date: {params.f} {params.d} </div>
                <div>time: {params.e}  </div>
                <div>total price :{params.a*data.priceadult*params.g+params.b*data.pricechildren*params.g+params.c*data.priceinfant*params.g}{params.h}</div>
                <button className=' border border-solid border-black rounded px-2 hover:bg-slate-300'>pay {params.a*data.priceadult*params.g+params.b*data.pricechildren*params.g+params.c*data.priceinfant*params.g}{params.h} and confirm</button>

            </div>
            </div>
        </>
    );
}

export default Confirmation;