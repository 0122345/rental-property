import NavBar from "./NavBar";


// export const metadata = {
//   title: "Next Rental Property App",
//   description: "Generated by Ntwari AShimwe Fiacre && Dushime Don Hossana",
// };

 


export default function RootLayout({ children }) {
  return (
    <div className="flex overflow-x-hidden">

       {/* <NavBar /> */}

      <main className='w-screen'>
        { children}
      </main>
    </div>
  );
}