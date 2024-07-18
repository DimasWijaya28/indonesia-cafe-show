"use client"
import { useState } from "react"

export default function Rute() {
    const maps = () => {
        return (
            <div className="bg-[#EBEBEB] flex justify-center items-center py-7">
                <iframe className="xl:block lg:hidden rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0245842754643!2d106.78885302591291!3d-6.127393960080999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d8d0db9e06d%3A0x54cb9f1766bde458!2sEmporium%20Pluit%20Mall!5e0!3m2!1sen!2sid!4v1720958863442!5m2!1sen!2sid" width="1500" height="900" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className="xl:hidden lg:block rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0245842754643!2d106.78885302591291!3d-6.127393960080999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d8d0db9e06d%3A0x54cb9f1766bde458!2sEmporium%20Pluit%20Mall!5e0!3m2!1sen!2sid!4v1720958863442!5m2!1sen!2sid" width="700" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    }
    const [handleClick, setHandleClick] = useState(maps)

    const byTransjakarta = () => {
        return (
            <div className="bg-[#EBEBEB] pl-32 py-10">
                <img src="./assets/TransJakarta.png" alt="" className="w-11/12" />
                <img src="./assets/Blok M.png" alt="" className="w-11/12"/>
                <img src="./assets/Pulo Gadung.png" alt="" className="w-11/12"/>
            </div>
        )
    }

    const byTrain = () => {
        return (
            <div className="bg-[#EBEBEB] pl-32 py-10">
                <img src="./assets/Manggarai.png" alt="" className="w-11/12" />
                <img src="./assets/Bogor.png" alt="" className="w-11/12"/>
                <img src="./assets/Bekasi.png" alt="" className="w-11/12"/>
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-evenly items-center px-12 h-16 font-newScience font-medium text-xl border-y border-3 border-[#2B2225] bg-[#8A966D]">
                <button onClick={() => (setHandleClick(maps))} className="py-4 px-5 focus:border-b-4 focus:border-[#2B2225] focus:opacity-100 opacity-50 hover:opacity-100">By Car</button>
                <button onClick={() => (setHandleClick(maps))} className="py-4 px-5 focus:border-b-4 focus:border-[#2B2225] focus:opacity-100 opacity-50 hover:opacity-100">By Taxi</button>
                <button onClick={() => (setHandleClick(byTransjakarta))} className="py-4 px-5 focus:border-b-4 focus:border-[#2B2225] focus:opacity-100 opacity-50 hover:opacity-100">By Transjakarta</button>
                <button onClick={() => (setHandleClick(byTrain))} className="py-4 px-5 focus:border-b-4 focus:border-[#2B2225] focus:opacity-100 opacity-50 hover:opacity-100">By Train</button>
            </div>
            <div>
                {handleClick}
            </div>
        </>
    )
}