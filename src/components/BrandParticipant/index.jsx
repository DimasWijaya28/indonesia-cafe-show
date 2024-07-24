"use client"

import { useState } from "react"
import Collapse from '@mui/material/Collapse';

export default function BrandParticipant() {

    const [view, setView] = useState(false)



    return (
        <>
            < div className="bg-[#EBEBEB]" >
                <div className="flex justify-center items-center pt-20">
                    <div className="border-4 border-[#102821] py-5 rounded mr-5"></div>
                    <div>
                        <h1 className="font-bold text-[#102821] text-3xl">
                            Brand Participant
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 px-3 mt-10">
                    <img src={"./assets/tenant/6.png"} alt="" className="" />
                    <img src={"./assets/tenant/122ea7bbbb57c6708d3ac6c989341bd1.w970.h300.png"} alt="" />
                    <img src={"./assets/tenant/23041295.png"} alt="" />
                    <img src={"./assets/tenant/223738595_1953923794773381_4166939463297907421_n.png"} alt="" />
                    <img src={"./assets/tenant/305410185_1093901451349243_5479258215677611317_n.png"} alt="" />
                    <img src={"./assets/tenant/309359679_401358282189483_6065704401251197175_n.png"} alt="" />

                </div>
                <Collapse in={view}>
                    <div className="grid grid-cols-2 gap-5 mt-5 px-3">          
                        <img src={"./assets/tenant/BRANCH-THUMBNAIL-AYOMAKAN_20230117134445.png"} alt="" />
                        <img src={"./assets/tenant/Brewista_logo.png"} alt="" />
                        <img src={"./assets/tenant/Delizia-delizia-logo.png"} alt="" />
                        <img src={"./assets/tenant/Djauw-Coffee.png"} alt="" />
                        <img src={"./assets/tenant/Eureka.png"} alt="" />
                        <img src={"./assets/tenant/Fifty_Five_logo.png"} alt="" />
                        <img src={"./assets/tenant/Frame 9.png"} alt="" />
                        <img src={"./assets/tenant/Gaggia_logo.png"} alt="" />
                        <img src={"./assets/tenant/images (1).png"} alt="" />
                        <img src={"./assets/tenant/images.png"} alt="" />
                        <img src={"./assets/tenant/k$-1.png"} alt="" />
                        <img src={"./assets/tenant/k$36f65b4f83dac5ee17830e7accd160d0.png"} alt="" />
                        <img src={"./assets/tenant/KitchenAid-Logo.png"} alt="" />
                        <img src={"./assets/tenant/KitchenArt Logo.png"} alt="" />
                        <img src={"./assets/tenant/la-pavoni-logo-png-transparent.png"} alt="" />
                        <img src={"./assets/tenant/Layer 1.png"} alt="" />
                        <img src={"./assets/tenant/Lelit_Logo_535x.png"} alt="" />
                        <img src={"./assets/tenant/Logo Horizontal  Black Transparent.png"} alt="" />
                        <img src={"./assets/tenant/Logo_fore_2020_color_landscape.png"} alt="" />
                        <img src={"./assets/tenant/logo-380633007-1661096391-d6b8a42949bd64d7062d8f947005d2651661096391.png"} alt="" />
                        <img src={"./assets/tenant/logo.2f69f3f55f41.png"} alt="" />
                        <img src={"./assets/tenant/logo.b385dadb720e51d38b4df2fc895808f8.png"} alt="" />
                        <img src={"./assets/tenant/logotype.png"} alt="" />
                        <img src={"./assets/tenant/MHW-3BOMBER.png"} alt="" />
                        <img src={"./assets/tenant/MiiR_Logo_Black.png"} alt="" />
                        <img src={"./assets/tenant/rasa_group_logo.png"} alt="" />
                        <img src={"./assets/tenant/robeanhood_new_logo-removebg-preview__3_-removebg-preview-1.png"} alt="" />
                        <img src={"./assets/tenant/Small_wordmark.png"} alt="" />
                        <img src={"./assets/tenant/Talasi-Logo-Color.png"} alt="" />
                        <img src={"./assets/tenant/Ubrukopi.png"} alt="" />
                        <img src={"./assets/tenant/WhatsApp Image -1.png"} alt="" />
                        <img src={"./assets/tenant/WhatsApp Image 2024-06-25 at 15.02.13_e6c62ed1.png"} alt="" />
                        <img src={"./assets/tenant/WhatsApp-Image-2024-01-05-at-3.11.39-PM-2.png"} alt="" />
                        <img src={"./assets/tenant/6.png"} alt="" />
                    </div>
                </Collapse>
                <div className="flex justify-center py-5">
                    {view ? <button onClick={() => setView(false)} className="font-newScience font-bold text-xl">
                        Hide
                    </button> : <button onClick={() => setView(true)} className="font-newScience font-bold text-xl">
                        View More
                    </button>}

                </div>
            </div>
        </>
    )
}

