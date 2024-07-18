"use client"
import { useState } from "react"

export default function RundownEvent() {
    const july = () => {
        return (
            <div className="mt-10 w-3/5">
                <div>
                    <img src={"./assets/Group 341@2x.png"} alt="" className="w-11/12" />
                </div>
                <div className="absolute inset-0 top-96 left-17 flex justify-center items-center">
                    <div className="mr-96 pr-36">
                        <h1 className="text-3xl mb-5 font-newScience font-bold text-[#EBEBEB]">
                            Day 1
                        </h1>
                        <span className="text-3xl font-newScience font-bold text-[#EBEBEB]">
                            Wednesday 31
                        </span>
                        <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                            TH
                        </h1>
                    </div>
                    <div className="grid grid-rows-4 w-2/5 gap-16 font-newScience text-xl content-center">
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const [handleClick, setHandleClick] = useState(july)
   
    const august = () => {
        return (
            <div className="mt-10 w-3/5">
                <div>
                    <img src={"./assets/01 August.png"} alt="" className="w-11/12" />
                </div>
                <div className="absolute inset-0 top-96 left-17 flex justify-center items-center">
                    <div className="mr-96 pr-36">
                        <h1 className="text-3xl mb-5 font-newScience font-bold text-[#EBEBEB]">
                            Day 2
                        </h1>
                        <span className="text-3xl font-newScience font-bold text-[#EBEBEB]">
                            Thursday 01
                        </span>
                        <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                            TH
                        </h1>
                    </div>
                    <div className="grid grid-rows-6 w-2/5 gap-16 font-newScience text-xl content-center">
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const secondAugust = () => {
        return (
            <div className="mt-10 w-3/5">
                <div>
                    <img src={"./assets/02 August.png"} alt="" className="w-11/12" />
                </div>
                <div className="absolute inset-0 top-96 left-17 flex justify-center items-center">
                    <div className="mr-96 pr-36">
                        <h1 className="text-3xl mb-5 font-newScience font-bold text-[#EBEBEB]">
                            Day 3
                        </h1>
                        <span className="text-3xl font-newScience font-bold text-[#EBEBEB]">
                            Friday 02
                        </span>
                        <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                            TH
                        </h1>
                    </div>
                    <div className="grid grid-rows-3 w-2/5 gap-16 font-newScience text-xl content-center">
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const thirdAugust = () => {
        return (
            <div className="mt-10 w-3/5">
                <div>
                    <img src={"./assets/003.png"} alt="" className="w-11/12" />
                </div>
                <div className="absolute inset-0 top-96 left-17 flex justify-center items-center">
                    <div className="mr-96 pr-36">
                        <h1 className="text-3xl mb-5 font-newScience font-bold text-[#EBEBEB]">
                            Day 4
                        </h1>
                        <span className="text-3xl font-newScience font-bold text-[#EBEBEB]">
                            Saturday 03
                        </span>
                        <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                            TH
                        </h1>
                    </div>
                    <div className="grid grid-rows-6 w-2/5 gap-16 font-newScience text-xl content-center">
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const fourthAugust = () => {
        return (
            <div className="mt-10 w-3/5">
                <div>
                    <img src={"./assets/Group 325.png"} alt="" className="w-11/12" />
                </div>
                <div className="absolute inset-0 top-96 left-17 flex justify-center items-center">
                    <div className="mr-96 pr-36">
                        <h1 className="text-3xl mb-5 font-newScience font-bold text-[#EBEBEB]">
                            Day 5
                        </h1>
                        <span className="text-3xl font-newScience font-bold text-[#EBEBEB]">
                            Sunday 4
                        </span>
                        <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                            TH
                        </h1>
                    </div>
                    <div className="grid grid-rows-4 w-2/5 gap-16 font-newScience text-xl content-center">
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                        <div id="box-shadow" className="bg-[#EBEBEB] w-full flex py-3">
                            <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-3 py-5 justify-center items-center">
                                <p className="text-[#EBEBEB] text-lg">09.00 - 10.00</p>
                                <p className="text-[#EBEBEB] text-sm">WIB</p>
                            </div>
                            <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                                <p>WORKSHOP</p>
                                <p className="font-bold">IBrc Judge Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#4C6444] relative">
            <div className="bg-[#242424] max-w-4xl pr-7 pb-7 rounded-br-3xl">
                <div className="flex items-center px-10 py-16 bg-[#EBEBEB] rounded-br-3xl">
                    <div className="ml-32 border-4 border-[#102821] py-7 rounded mr-10"></div>
                    <h1 className="text-5xl font-newScience font-bold">
                        RUNDOWN EVENT
                    </h1>
                </div>
            </div>
            <div className="flex justify-center py-10">
                <div className="flex justify-around pt-7 w-3/4 border-b-2 font-newScience text-2xl tracking-wide text-[#EBEBEB] border-[#242424]">
                    <button onClick={() => (setHandleClick(july))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">31 July</button>
                    <button onClick={() => (setHandleClick(august))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">01 August</button>
                    <button onClick={() => (setHandleClick(secondAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">02 August</button>
                    <button onClick={() => (setHandleClick(thirdAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">03 August</button>
                    <button onClick={() => (setHandleClick(fourthAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">04 August</button>
                </div>
                
            </div>
            <div className="flex">
                {handleClick}
                </div>

        </div>
    )
}