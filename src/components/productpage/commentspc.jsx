import React from "react";
import Comments from "./comments";
import * as Icon from "react-bootstrap-icons";
 

function commentspc(props) {
  const a= props.comments.map((x)=>{
    return (
      {...x , comment:`${x.comment.substring(0,200)}...`}
    )
   }
  )

  const com1 =a.slice(0, 3);
  const com2 = a.slice(3);

  const com12 = com1.map((x) => {
    return (
      <Comments
        key={x.id}
        name={x.name}
        URL={x.URL}
        date={x.date}
        comment={x.comment}
      />
    );
  });
  const com22 = com2.map((x) => {
    return (
      <Comments
        key={x.id}
        name={x.name}
        URL={x.URL}
        date={x.date}
        comment={x.comment}
      />
    );
  });
  return (
    <div className="hidden md:block xl:w-[80rem] md:w-10/12  m-auto   mt-6 xl:mt-10">
        <div className="flex items-center ml-6 mb-4">
            <Icon.StarFill className="scale-[2] mr-6"/>
            <div className="font-bold text-2xl"> {props.ratings} {props.rating}</div>
        </div>
      <div className="xl:flex w-full">
        <div className="xl:w-[50%]">{com12}</div>
        <div className="xl:w-[50%]">{com22}</div>
      </div>
      <div className="bg-white border border-solid border-slate-400 px-3 py-1 rounded w-fit my-6 hover:cursor-pointer"> Show all comments</div>
      <hr/>
    </div>
  );
}

export default commentspc;
