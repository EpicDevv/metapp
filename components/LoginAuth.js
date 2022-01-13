import React from 'react'
import Image from 'next/image'

function LoginAuth() {
    return (
        <div className='bg-black relative '>
            
            <div className='flex opacity-30 flex-col absolute z-10 h-4/6 items-center justify-center w-full space-y-4'>
                <Image className='object-cover rounded-full' src='https://wallpaperaccess.com/full/1267675.jpg'
                height={200} width={200} />

                <button  className='bg-blue-300 rounded-lg p-5 font-bold '>Loading Web 3...</button>
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

export default LoginAuth
