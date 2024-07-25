"use client"
import { useState } from "react"

export default function RundownEvent() {
    const july = () => {
        return (
            <div className="flex-col space-y-10 justify-center items-center w-96 font-newScience pl-5">
                <div id="box-shadow" className="bg-[#EBEBEB] flex justify-center">
                    <div className="bg-[#2B2225] w-40 h-16 rounded-xl mr-2 flex flex-wrap px-1 py-2 justify-center items-center">
                        <p className="text-[#EBEBEB] text-sm">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex justify-center">
                    <div className="bg-[#2B2225] w-40 h-16 rounded-xl mr-2 flex flex-wrap px-1 py-2 justify-center items-center">
                        <p className="text-[#EBEBEB] text-sm">10.00 - 16.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <p>COMPETITION</p>
                        <p className="font-bold">Tanding Tiga Round 1</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex justify-center">
                    <div className="bg-[#2B2225] max-w-28 h-16 rounded-xl mr-2 flex flex-wrap px-1 py-2 justify-center items-center">
                        <p className="text-[#EBEBEB] text-sm">17.00 - 18.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <p className="mr-5">Games</p>
                        <p className="font-bold">Mini Challenges</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] max-w-28 h-16 rounded-xl mr-2 flex flex-wrap px-1 py-2 justify-center items-center">
                        <p className="text-[#EBEBEB] text-sm">19.00 - 20.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        {/* <p>WORKSHOP</p> */}
                        <p className="font-bold">TBA</p>
                    </div>
                </div>
            </div>
        )
    }

    const [handleClick, setHandleClick] = useState(july)

    const august = () => {
        return (
            <div className="flex-col space-y-10 justify-center w-96 font-newScience pl-5">
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
            </div>
        )
    }

    const secondAugust = () => {
        return (
            <div className="flex-col space-y-10 justify-center w-96 font-newScience pl-5">
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
            </div>
        )
    }

    const thirdAugust = () => {
        return (
            <div className="flex-col space-y-10 justify-center w-96 font-newScience pl-5">
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
            </div>
        )
    }

    const fourthAugust = () => {
        return (
            <div className="flex-col space-y-10 justify-center w-96 font-newScience pl-5">
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
                <div id="box-shadow" className="bg-[#EBEBEB] flex">
                    <div className="bg-[#2B2225] w-40 rounded-3xl m-3 flex flex-wrap px-2 py-5 justify-center items-center">
                        <p className="text-[#EBEBEB] text-md">09.00 - 10.00</p>
                        <p className="text-[#EBEBEB] text-sm">WIB</p>
                    </div>
                    <div className="flex flex-wrap w-56 h-20 mt-3 items-center">
                        <p>WORKSHOP</p>
                        <p className="font-bold">IBrc Judge Workshop</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#4C6444] border-y border-black pb-10">
            <div className="bg-[#242424] pr-5 pb-5 w-80 rounded-br-3xl">
                <div className="flex items-center px-2 py-5 bg-[#EBEBEB] rounded-br-3xl">
                    <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
                    <h1 className="text-2xl font-newScience font-bold">
                        RUNDOWN EVENT
                    </h1>
                </div>
            </div>
            <div className="flex justify-center py-5">
                <div className="flex justify-around pt-5 w-full mx-5 border-b font-newScience text-xs text-[#EBEBEB] border-[#242424]">
                    <button onClick={() => (setHandleClick(july))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">31 Jul</button>
                    <button onClick={() => (setHandleClick(august))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">01 Aug</button>
                    <button onClick={() => (setHandleClick(secondAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">02 Aug</button>
                    <button onClick={() => (setHandleClick(thirdAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">03 Aug</button>
                    <button onClick={() => (setHandleClick(fourthAugust))} className="opacity-50 focus:border-b-4 focus:opacity-100 focus:border-white active:border-b-4 px-3 active:border-white pb-3">04 Aug</button>
                </div>

            </div>
            <div className="flex justify-center mr-10">
                {handleClick}
            </div>

        </div>
    )
}