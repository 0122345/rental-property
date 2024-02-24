import React from 'react';
import Layout from '@/components/layout';
import Image from 'next/image';
import { Beach } from "@/utils/MapImage";
import styled from '@emotion/styled';
import { Props } from 'next/script';
import { FaArrowRight } from "react-icons/fa6";

const Background = styled.div`
background-color:  #333333;
opacity: 1;
background-image: linear-gradient(to right,  #2E4848,  #2E4848 32px,  #333333 18px,  #333333 );
background-size: 40px 100%;
`;
  
const Work = () => {
  return (
    <Layout>
      <main className="w-dvw h-[135dvh] overflow-x-hidden">

        <div className="" id="top">
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
           
        </div>


        <Background>
           <div className="inline relative">

             {Beach.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              
              width={image.width}
              opacity ={image.opacity}
              height={image.height}
              loading="lazy" 
              className="flex justify-start  items-center relative rounded-2xl"
            />
          ))}

           </div>
         
        </Background>
      </main>
    </Layout>
  );
};

export default Work;
