"use client"

import { Bars3Icon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/solid'
import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function Navbar() {

    const [panel, setPanel] = useState({
        top: false
    })
    const navigation = [
        { name: 'HOME', href: '#section1' },
        { name: "WHAT'S ON", href: '#section2' },
        { name: "WHO'S THERE", href: '#section3' },
        { name: 'GETTING HERE', href: '#section4' },
        { name: 'RUNDOWN EVENT', href: '#section5' },
        { name: 'CONTACT US', href: '#section6' }
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setPanel({ ...panel, [anchor]: open });
    };

    const menu = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="bg-[#EBEBEB]"
        >
            <div className="px-4 py-3 flex justify-between items-center">
                <img src={"./assets/Group 47.png"} alt="" className="w-32" />
                <button onClick={toggleDrawer(anchor, false)}><XMarkIcon className='size-6' /></button>
            </div>
            <List>
                {navigation.map((item) => (
                    <>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton>
                                <Link underline='none' color='inherit' href={item.href} className='font-newScience'>{item.name}</Link>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <div className="fixed border-2 w-full z-40 px-4 py-3 border-[#2B2225] bg-[#EBEBEB]">
                {['top'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="flex justify-between items-center">
                            <img src={"./assets/Group 47.png"} alt="" className="w-32" />
                            <div className='space-x-5 hidden md:block'>
                                {navigation.map((item) => <a href={item.href}>{item.name}</a>
                                )}
                            </div>
                            <div></div>
                            <div className='md:hidden block'>
                                <button onClick={toggleDrawer(anchor, true)}><Bars3Icon className="size-6" /></button>
                                <Drawer
                                    anchor={anchor}
                                    open={panel[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {menu(anchor)}
                                </Drawer>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

