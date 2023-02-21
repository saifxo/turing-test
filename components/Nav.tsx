import logo from '../assets/logo.png'
import Image from 'next/image'

import { useSession } from 'next-auth/react'
function Nav() {
    const {data:session}=useSession();
  return (
    <div className='h-16 bg-white shadow-md flex items-center justify-between w-full'>
        <div className='h-16 w-64 flex items-center ml-10'>
            <Image src={logo} alt='logo'/>
            
      </div>
      <div className='mr-10'>
          
          </div>
        </div>  
    
  )
}

export default Nav