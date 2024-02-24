import React from 'react'
import Layout from '@/components/layout'

const Awards = () => {
  return (
    <Layout>
     <main className="h-dvh bg-[#333333] w-dvw overflow-x-hidden">
        <div className="flex top-10 relative justify-between text-white "id='top'>
           
           <span className="ml-10 text-md space-y-4">
            <p>(4)</p>
            <p className="">Awards</p>
           </span>

           <span>
            <p className='w-96 text-3xl mr-10 font-light'>
            Award is a pixel that reflecting 
            our ongoing dedication to innovation 
            and excellence
            </p>
           </span>

        </div>

        <div className=""id='json-data'>

        </div>

     </main>
     </Layout>
  )
}

export default Awards