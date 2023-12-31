import { useState } from "react";
import LogoCreate from "../logoCreate/LogoCreate";

function Posts({ photo, name, email, post }) {

  let [imgError, setImgError] = useState(false);

  return (
    <section className="bg-gray-900">
        <div className="items-center rounded-lg shadow flex bg-gray-800 border-gray-700 max-w-lg">
            <div className="w-full">
            {
              !imgError?
              <img onError={()=>setImgError(true)} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={photo} alt="LinkedIn_Profile"/>
              :
              <LogoCreate name={name}/>
            }
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                    <p>{name}</p>
                </h3>
                <span className="text-gray-400">{email}</span>
                <p className="mt-3 mb-4 font-light text-gray-400">{post}</p>
            </div>
          </div> 
    </section>
  )
}

export default Posts;