import React from "react";


function bottom(props) {
  return (
    <div className="w-[100%] bg-slate-200">
       
      <div className="xl:w-[80rem] w-[90%]  m-auto   md:flex justify-between ">
        <div>
          <div className="text-xl font-bold mb-2 md:my -2">support</div>
          <div className="my-3 hover:cursor-pointer hover:underline">help center</div>
          <div className="my-3 hover:cursor-pointer hover:underline">air cover</div>
          <div className="my-3 hover:cursor-pointer hover:underline">safety information</div>
          <div className="my-3 hover:cursor-pointer hover:underline">Supporting people with disablities</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> cancellation policy</div>
          <div className=" my-3 hover:cursor-pointer hover:underline">our covid responce</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Report a neighbourhood concern</div>
        </div>
        <div>
          <div className="text-xl font-bold my-2">Community</div>
          <div className="my-3 hover:cursor-pointer hover:underline">Airbnb.org: disaster relief housing</div>
          <div className="my-3 hover:cursor-pointer hover:underline">Support Afghan refugees</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Combating discrimination</div>
          <div className="my-3 hover:cursor-pointer hover:underline">Supporting people with disablities</div>
        </div>

        <div>
          <div className="text-xl font-bold my-4"> Hosting</div>
          <div className="my-3 hover:cursor-pointer hover:underline">Try hosting</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> AirCover for Hosts</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Explore hosting resources </div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Supporting people with disablities</div>
        </div>

        <div>
          <div className="text-xl font-bold my-2"> Airbnb </div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Newsroom</div>
          <div className="my-3 hover:cursor-pointer hover:underline"> Learn about new features </div>
          <div className="my-3 hover:cursor-pointer hover:underline">Letter from our founders </div>
          <div className="my-3 hover:cursor-pointer hover:underline">Careers</div>
          <div className="mt-3 hover:cursor-pointer hover:underline"> investors</div>
        </div>
      </div>
      
      <div className="xl:w-[80rem] w-[90%]  md:flex m-auto md:space-x-6 items-center mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-c-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z" />
        </svg>
        <div className="my-4">2022 Airbnb , inc </div>
        <div>Privacy  ·  Terms  ·  Sitemap  ·  Company  details</div>
      </div>
      
    </div>
  );
}

export default bottom;
