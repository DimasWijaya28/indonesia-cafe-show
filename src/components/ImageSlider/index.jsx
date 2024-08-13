"use client"

import { useState } from "react"
import { ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'

export default function ImageSlider({ children: images }) {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))

    return (
        <div className="overflow-hidden relative md:w-full md:h-full">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{images}</div>
            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-5">
                    {images.map((_, i) => (
                        <div className={`transition-all duration-500 ease-out w-3 h-3 rounded-full ${curr === i ? "p-2 ring-offset-2 ring bg-white" : "ring-offset-2 ring bg-opacity-50"}`} />
                    ))}
                </div>
                <button onClick={prev} className="rounded-xl px-4 py-2 bg-white group hover:bg-[#9F6B46]"><ArrowLongLeftIcon class="size-6 text-black group-hover:text-white" /></button>
                <button onClick={next} className="rounded-xl px-4 py-2 bg-white group hover:bg-[#9F6B46]"><ArrowLongRightIcon class="size-6 text-black group-hover:text-white" /></button>
            </div>
        </div>

    )
}