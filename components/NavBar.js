import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";


const NavBar = () => {

 const Navb = {
  "background-color": "",  
  backgroundColor: "rgba(0,0,0, 0.4)",
  
 }
   
  return (
   <main className="flex justify-center text-white w-screen h-16 relative z-10">

    {/* in mobile view  */}
     
     {/* <p className="text-4xl flex  absolute">
        Logo
      </p>
      <div className="flex">
         <ul className="flex gap-8">
          <li className="">Home</li>
          <li className="">Service</li>
          <li className="">Projects</li>
          <li className="">Contact Us</li>
         </ul>
      </div>
      <form action="" className="" id="">
        <button className="flex text-black bg-white border justify-center w-24 rounded-xl">Book a call</button>
        <button className="flex bg-white w-8 h-6 rounded-full text-black justify-center item-center" >
          <FaArrowRight className="flex justify-center items-center translate rotate-[-45deg]" />
          </button>
      </form> */}

      
     
     
     
     
     {/* in medium,large devices view
      */}
      <p className="text-4xl flex xl:absolute lg:absolute md:absolute justify-start items-start left-8 top-5">
        Logo
      </p>
      <div className="flex pt-8">

         <ul className="flex gap-8 p-7 justify-center items-center border-solid  rounded-[25px] shadow-md shadow-current" style={Navb}>
          <li className="space-x-2 text-center cursor-pointer ">Home </li>
            |
          <li className="p-3 cursor-pointer ">Service </li>
            |
          <li className="space-x-2 cursor-pointer ">Projects </li>
            |
          <li className="space-x-2 cursor-pointer ">Contact Us</li>
         </ul>
      </div>
      <form action="" className="flex right-9 top-5  justify-end items-center space-x-4  xl:absolute lg:absolute md:absolute" id="">
        <button className="flex text-black bg-white border justify-center w-24 h-9 rounded-xl">Book a call</button>
        <button className="flex justify-center items-center bg-white w-8 h-8 rounded-full text-black text-center" >
          <FaArrowRight className="flex justify-center items-center translate rotate-[-45deg]" />
          </button>
      </form>
   </main>
  )
}

export default NavBar