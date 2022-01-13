import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {

    const { authenticate } = useMoralis();
    
    return (
        <div className='bg-black relative '>
            
            <div className=' flex flex-col absolute z-10 h-4/6 items-center justify-center w-full space-y-4'>
                <Image className=' object-cover rounded-full' src='https://wallpaperaccess.com/full/1267675.jpg'
                height={200} width={200} />

                <button onClick={authenticate} className='bg-blue-300 rounded-lg p-5 font-bold animate-pulse'>login With your MetaMask Wallet </button>
            </div>
            <div className='w-full h-screen'> 
            <Image 
            layout='fill'
            objectFit='cover'
            src="https://links.papareact.com/55n" />
            </div>
        </div>
    )
}

export default Login
