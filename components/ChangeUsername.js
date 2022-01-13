import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
    const { user, userError, isUserUpdating, setUserData } = useMoralis()

    const setUsername = () => {
        const username = prompt(`enter your new Username (current: ${user.getUsername()})`)
        if (!username) return
        setUserData({
            username,
            
        })
    }
    return (
        <div className='text-sm absolute top-5 right-5'>
            <button onClick={setUsername} disabled={isUserUpdating} className='hover:text-pink-700'>change username</button>
        </div>
    )
}

export default ChangeUsername
