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
  let lop;
  if (user) {
    lop = "block";
  } else {
    lop = "hidden";
  }

  console.log(lop);

  async function handel() {
    setLoading(true);
    try {
      await signup(email.current.value, password.current.value);
    } catch {
      alert("email aready in use try login ");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(email.current.value, password.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover fixed bg-[url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]  ">
 <div className="flex w-full justify-center  mt-[15rem]">




      <div  className="bg-white w-fit rounded-l-xl z-20 p-5">
        <div>
          <input className="border  my-4 border-solid border-black rounded w-full" ref={email} placeholder="email" />
        </div>

        <div>
          <input className="border  my-4 border-solid border-black rounded w-full" ref={password} placeholder="password"   />
        </div>

        <div className="flex justify-between">

        <div>

          <button className="border  mr-4  px-3 border-solid border-black rounded" disabled={loading} onClick={handleLogin}>
            login
          </button>
        </div>
    
     
        <div>

          <button  className="border  px-3  border-solid border-black rounded"   onClick={handleLogout}>
            logout
          </button>
        </div>
      
        </div>


        <div className={lop}>logged in as : {user?.email}</div>

        <Link to="/">
          <div className="border mt-3  p-auto  border-solid border-black rounded">to homepage </div>
        </Link>
        <Link to="/signup">
          <div className="  mt-3  p-auto  hover:underline"> dont have an account signup now </div>
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
