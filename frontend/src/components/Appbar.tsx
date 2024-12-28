import { Link } from "react-router-dom";




export function Avatar1({ name }: { name: string}) {
    return (
     <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 `}>
        <span className="text-lg text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    );
  }
export const Appbar =()=>{
      
    return<div className="border-b flex justify-between py-4 px-10">
<Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
    medium
</Link>

<div>
<Link to={'/publish '}>
<button type="button" className=" mr-8 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2">New</button>
</Link>

<Avatar1  name="Jaldabir"/>
</div>
    </div>
}
