import React from "react";
import { signup, useAuth, login, logout } from "../firebase";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Loginpage() {
  const [loading, setLoading] = useState(false);

  const user = useAuth();
  console.log(user);
  const email = useRef();
  const password = useRef();
  const passwordconfirmation = useRef();

const hello= ()=>{
   if(passwordconfirmation.current.value===password.current.value){
    handel()
   }else{
    alert("passwords dont match")
   }
}

  let lop;
  if (user) {
    lop = "block";
  } else {
    lop = "hidden";
  }

 

  async function handel() {
    setLoading(true);
    try {
      await signup(email.current.value, password.current.value);
    } catch {
      alert("email aready in use try login ");
    }
    setLoading(false);
  }

 

 
  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover fixed bg-[url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]  ">
 <div className="flex w-full justify-center mt-[15rem]">




      <div  className="bg-white  w-fit rounded-l-xl z-20 p-5">
        <div>
          <input className="border  my-4 border-solid border-black rounded w-full" ref={email} placeholder="email" />
        </div>

        <div>
          <input type="password" className="border  my-4 border-solid border-black rounded w-full" ref={password} placeholder="password "   />
        </div>
        <div>
          <input  className="border  my-4 border-solid border-black rounded w-full" ref={passwordconfirmation} placeholder="password confirmation"   />
        </div>
     

       

          <button className="border   w-full  border-solid border-black rounded" disabled={loading} onClick={hello}>
            sign up
          </button>

        <div className={lop}>logged in as : {user?.email}</div>

        <Link to="/">
          <div className="border   w-full  border-solid border-black rounded mt-4">to homepage </div>
        </Link>
        <Link to="/login">
          <div className="  mt-3  p-auto  hover:underline"> alredy have an account try login  </div>
        </Link>
      </div>
         <div className="w-[20rem]">
          <img className="rounded-r-xl h-full" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMYfWfEGayuoKMRIvK-vUX9fqNYHb-zrkZRLr4JvTGJ_gRhHDkiJq8nNTQ7_rAYjofdA&usqp=CAU" ></img>
         </div>
 </div>
    </div>
  );
}

export default Loginpage;
