"use client"

import { Bars3Icon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {

    const [panel, setPanel] = useState(false)
    const navigation = [
        { name: 'HOME', href: '#section1' },
        { name: "WHAT'S ON", href: '#section2' },
        { name: "WHO'S THERE", href: '#section3' },
        { name: 'GETTING HERE', href: '#section4' },
        { name: 'RUNDOWN EVENT', href: '#section5' },
        { name: 'CONTACT US', href: '#section6' }
    ]
    const close = () => setPanel(false)
    const menu = () => {
        return (
            <div className='bg-[#EBEBEB] space-y-5 pb-2 pt-5'>
                {navigation.map((item) => (
                    <ul className='border-b pb-2 w-full border-black'>
                        <a
                            key={item.name}
                            href={item.href}
                        // aria-current={item.current ? 'page' : undefined}
                        // className={classNames(
                        //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        //     'rounded-md px-3 py-2 text-sm font-medium',
                        // )}
                        >
                            {item.name}
                        </a>
                    </ul>
                ))}
            </div>
        )
    }

    return (
        <>
            <div className="fixed border-2 w-full z-40 px-4 py-3  border-[#2B2225] bg-[#EBEBEB]">
                <div className="flex justify-between items-center">
                    <img src={"./assets/Group 47.png"} alt="" className="w-32" />
                    <div className="">

                        {panel ? <button onClick={close}><XMarkIcon className='size-6' /></button> : <button onClick={() => (setPanel(menu))}><Bars3Icon className="size-6" /></button>}


                    </div>
                </div>
                {panel}
            </div>

        </>

    )
}

