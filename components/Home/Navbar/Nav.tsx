'use client'

import React, { useState, useEffect } from 'react'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { MenuIcon, Search, ShoppingCart } from 'lucide-react'

type props = {
    openNav: () => void
}

const Nav = ({openNav}: props) => {
    const [navBg, setNavBg] = useState(false);
    
    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        }
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    },[])

    const bg_style = navBg ? 'bg-gray-950 shadow-md' : '';

    return (
        <div className={`flex ${bg_style} justify-between items-center h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200`}>
            <h1 className="text-3xl text-white font-bold ml-8 md:ml-16">IMGIAI</h1> {/* logo */}
            <div className='md:flex items-center space-x-10 hidden'>
                {Navlinks.map((link) => {
                        return (
                            <Link key={link.id} href={link.url} className='text-white text-base w-fit block after:block after:content-[""] after-absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after-transition after:duration-300 after:origin-center'>
                                <p>{link.label}</p>
                            </Link>
                        );
                    })
                }
                {/* Navlink */}
            </div>
            {/* Buttons and icons */}
            <div className='flex items-center space-x-5 md:space-x-8 text-white  mr-8 md:mr-16'>
                <ShoppingCart className='w-6 h-6 cursor-pointer' />
                <Search className='w-6 h-6 cursor-pointer' />
                <MenuIcon onClick={openNav} className='w-6 h-6 cursor-pointer md:hidden' />
            </div>
        </div>

  )
}

export default Nav
