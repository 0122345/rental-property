import React from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'
import lazySizes from 'lazysizes'
import { images } from '@/utils/ExpertSlider'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';



const Expertise = () => {


const switchLeft = () => {
  const slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 500
}

const switchRight = () => {
  const slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 500
}





  return (
    <Layout>
    <main className="md:h-[95vh]  lg:h-[95vh]  xl:h-[95vh] h-dvh bg-[#333333] w-dvw overflow-x-hidden flex flex-col md:flex-row lg:flex-row xl:flex-row">
    <div className="text-white relative  lg:pt-20 md:pt-20 sm:pt-3 flex flex-col lg:space-y-32 md:space-y-32 sm:space-x-4 sm:text-center  items-baseline float-left lg:left-9 md:left-6 sm:left-2 w-[30vw]" id="left">
       <span className="text-md flex flex-col justify-start items-baseline space-y-1">
         <p>(1)</p>
         <p>Our Expertise</p>
       </span>

       <span className="flex text-xl ">
       When moments captured
       every dreams crafted into
       beautiful reality
       </span>

       <span className="flex flex-col text-white justify-start items-baseline">
        <p className="text-lg">
          chasing cloud at mont blanc’s pinnacle
        </p>
         <p className="text-sm">
          mont blanc’s france
         </p>
       </span>

   </div>
     <div className="flex flex-col float-right space-y-44 lg:absolute right-11 pt-3 sm:relative" id="right">

           <span className="flex lg:text-3xl text-xl flex-col text-white lg:w-[420px] sm:w-[100px] sm:h-auto sm:right-11 pt-11 relative">
            <span className="">Land Scape</span>
            <span className="">Wild Life</span>
            <span className="">Architecture</span>
            <span className="">Portrait</span>
            <span className="">Travel</span>
           </span>
           <span className="flex space-x-4 right-11 relative">
             {/* <button className="text-center text-white w-[13svw] h-[6vh] border-2 border-solid border-white rounded-[25px]">
                    learn more
             </button>

             <button className="flex justify-center items-center bg-white w-8 h-8 rounded-full text-black text-center">
              
             </button> */}
             <div className="flex justify-between items-end float-right right-4 absolute w-full  overflow-hidden  scroll whitespace-nowrap scroll-smooth  scrollbar-hide md:scrollbar-default" id="slider">
                {images.map((item) =>{
                  return(
                    <Image
                 key={item.id}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className='right-11 p-2 cursor-pointer hover:scale-105 ease-in duration-300 relative rounded-2xl'
               />
                  )
 
                })}
             </div>

              <div className="flex justify-start items-baseline float-right right-11 pb-6" id="sliderButton">
              <MdChevronLeft onClick={switchLeft} className='opacity-50 cursor-pointer hover:opacity-100 w-24'  size={50} />
              <MdChevronRight onClick={ switchRight} className='opacity-50 cursor-pointer hover:opacity-100' size={50} />
              <span className="text-white">See All</span>
              <span className="text-white"> long icon line</span>
                </div>  

           </span>
     </div>
    </main>
</Layout>
  )
}

export default Expertise