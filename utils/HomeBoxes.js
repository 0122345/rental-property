
const HomeBoxes = () => {



   const container = {
    display: "grid",
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap:'4px',
    gridRowGap:'4px'
   };

   const one = {
    gridArea:'1/1/2/2',
   }
   const two ={
    gridArea:'1/2/2/3'
   }
   const three = {
    gridArea:'2/1/3/2',
   }
   const four = {
    gridArea: '2/2/3/3',
   }

   const five ={
    gridArea: '2/3/3/4'
   }



  return (
     <div className="flex justify-center items-center left-9 relative " style={container}>
        <span className="boxes"style={one}>
            Land Scape
        </span>
        <span className="boxes"style={two}>
            Wild Life
        </span>
        <span className="boxes"style={three}>
            Architecture
        </span>
        <span className="boxes"style={four}>
            Travel
        </span>
        <span className="boxes"style={five}>
            Portrait
        </span>
     </div>
  )
}

export default HomeBoxes