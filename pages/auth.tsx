import React, { useCallback, useState } from 'react'
import Input from '@/components/Input'
import Image from 'next/image'
import logo from '../public/Images/logo.png'
import Head from 'next/head'


const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [variant, setVariant] = useState('signin')


    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'signin' ? 'register' : 'signin')
    }, [])

    return (
        <>
            <Head>
                <title>
                    Netflix | {variant}
                </title>
            </Head>
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
                                {variant === 'signin' ? 'Sign in' : 'Sign up'}
                            </h2>
                            <div className='flex flex-col gap-4'>
                                {variant === 'register' && (
                                    <Input
                                        label='Username'
                                        onChange={(e: any) => setName(e.target.value)}
                                        id="password"
                                        type='password'
                                        value={name}
                                    />
                                )}
                                <Input
                                    label='Email'
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    id="email"
                                    type='email'
                                    value={email}
                                />
                                <Input
                                    label='Password'
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    id="password"
                                    type='password'
                                    value={password}
                                />
                            </div>
                            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                                {variant === 'signin' ? 'sign in' : 'sign up'}
                            </button>
                            {variant === 'register' && (
                                <p className='text-neutral-500 mt-12'>
                                    First time using Netflix?
                                    <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                        create an account
                                    </span>
                                </p>
                            )}
                            {variant === 'signin' && (
                                <p className='text-neutral-500 mt-6'>
                                    Already have an Account?
                                    <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                        Signin
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Auth