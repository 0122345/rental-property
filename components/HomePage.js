import Image from "next/image";
import Layout from './layout';
import 'lazysizes';
import HomeBoxes from "@/utils/HomeBoxes";
import HomeSlider from "@/utils/HomeSlider";
 

const HomePage = () => {
  return (
     <Layout>
      
        <main className="w-dvw h-dvh outline-none p-0 m-0 overflow-hidden" id="">
            <Image
            data-src="/img/House Rentalhouse.png"
            alt="background"
            className="lazyload"
              quality={80}
              fill
              sizes="90vw"
              height={100}
              style={{
                objectFit: 'fill',
                zIndex: '0',
               }}
            
            />

             <div className="flex lg:text-3xl md:text-2xl sm:text-xl text-white  relative font-bold left-9 top-52  w-60">
               <p>
               Capturing beautiful
               moments inside lens and
               shouter speed
               </p>
             </div>
            <div className="">
                <HomeBoxes />

        {/* <div className="flex relative w-80">
        <span className="boxes">
            Land Scape
        </span>
        <span className="boxes">
            Wild Life
        </span>
        <span className="boxes">
            Architecture
        </span>
        <span className="boxes">
            Travel
        </span>
        <span className="boxes">
            Portrait
        </span>
         </div> */}

            </div>
            <div className="" id="slider">
              <HomeSlider />
            </div>
        </main>
     </Layout>
  )
}

export default HomePage