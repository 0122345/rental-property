 
import Layout from '@/components/layout'
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <Layout>
        <main className="md:h-[95vh]  lg:h-[95vh]  xl:h-[95vh] h-dvh bg-[#333333] w-dvw overflow-x-hidden flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="text-white relative  lg:pt-28 md:pt-28 sm:pt-3 flex flex-col lg:space-y-32 md:space-y-32 sm:space-x-4 sm:text-center  items-baseline float-left lg:left-9 md:left-6 sm:left-2 w-[30vw]" id="left">
           <span className="text-md">
             (0)
           </span>

           <span className="flex text-xl">
               About Us
           </span>

           <span className="text-white text-sm w-[420px] ">
               Lorem ipsum dolor sit, 
               amet consectetur adipisicing elit.
                Dolores tempore facilis molestiae
                 nihil alias. Unde aperiam illo 
                 inventore obcaecati quis.
           </span>

       </div>
         <div className="flex flex-col float-right space-y-44 lg:absolute right-11 pt-14 sm:relative" id="right">

               <span className="flex lg:text-3xl text-xl text-white lg:w-[420px] sm:w-[100px] sm:h-auto sm:right-11 pt-11 relative">
               Photography is driven by a deep
               passion or capture I life is
               most precious moments with
               artistry and touch with magic
               </span>
               <span className="flex space-x-4 right-11 relative">
                 <button className="text-center text-white w-[13svw] h-[6vh] border-2 border-solid border-white rounded-[25px]">
                        learn more
                 </button>

                 <button className="flex justify-center items-center bg-white w-8 h-8 rounded-full text-black text-center">
                  <FaArrowRight  className="flex justify-center items-center translate rotate-[-45deg]" />
                 </button>

               </span>
         </div>
        </main>
    </Layout>
  )  
}

export default AboutUs