import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="relative flex justify-center items-center h-29 border border-3 border-[#2B2225] bg-[#EBEBEB]">
        <img src={"./assets/Group 47.png"} alt="" className="absolute top-2 left-12 w-40" />
        <div className="py-7 px-5">HOME</div>
        <div className="py-7 px-5">WHATS ON</div>
        <div className="py-7 px-5">WHOS THERE</div>
        <div className="py-7 px-5">GETTING HERE</div>
        <div className="py-7 px-5">RUNDOWN EVENT</div>
        <div className="py-7 px-5">CONTACT US</div>
      </div>

      {/* Home */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex">
          <div className="flex flex-wrap justify-center items-center pt-12 pb-40 bg-[#203731]">
            <div className="px-12">
              <h1 className="font-bold text-5xl text-[#CBBA9D]">
                Brewing Indonesia's Finest
              </h1>
              <h3 className="mt-14 text-2xl text-[#CBBA9D]">
                Experience the culmination of Indonesian coffee culture at
              </h3>
              <h3 className="font-bold text-2xl text-[#CBBA9D]">
                Emporium Pluit Mall, Jakarta. July 31st - August 4th, 2024
              </h3>
              <p className="mt-14 text-wrap text-[#CBBA9D]">
                The Indonesia Cafe Show, themed 'Brewing Indonesia's Finest,' is the premier event celebrating the rich heritage and exceptional coffee of Indonesia. This inaugural event brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={"./assets/pexels-maksgelatin-4816457@2x.png"} alt="" className="w-full" />
          </div>
          <div className="flex absolute bottom-0 bg-[#8A966D] w-full h-20 border-2 border-[#2B2225]">
            <div className="flex items-center">
            footer
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
