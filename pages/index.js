import Image from "next/image";
import Layout from '@/components/layout'
import HomePage from "@/components/HomePage";
import AboutUs from "@/components/AboutUs";
import Work from "@/components/Work";
import Awards from "@/components/Awards";
import Expertise from "@/components/Expertise";
import NavBar from "@/components/NavBar";
 

export default function Home() {
  return (
    <Layout >  
        <NavBar/>
        <HomePage />
        <AboutUs />
        <Expertise />
        <Work />
        <Awards/>  
    </Layout>
    
  );
}
