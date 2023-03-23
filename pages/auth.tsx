import React from 'react'
import Input from '@/components/Input'
import Image from 'next/image'
import logo from '../public/Images/logo.png'
import { useState } from 'react'


const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image
                        src={logo}
                        alt='Logo'
                        className='h-12 w-32 hover'
                    />
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>
                            Sign In
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <Input
                                label='Username'
                                onChange={(e) => setName(e.target.value)}
                                id="password"
                                type='password'
                                value={name}
                            />
                            <Input
                                label='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type='email'
                                value={email}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Auth