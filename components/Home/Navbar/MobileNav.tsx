import React from 'react'
import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import { XIcon } from 'lucide-react';

type props = {
    showNav: boolean
    closeNav: () => void
}

const MobileNav = ({closeNav, showNav}: props) => {
    const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';
  return (
    <div>
        {/* navlinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0`}>
            {Navlinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url}>
                            <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
                        </Link>
                    );
                })
            }
            {/* close icon */}
            <XIcon onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    </div>
  )
}

export default MobileNav
