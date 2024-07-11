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


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Home */}
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
        {/* About */}
        <div className="bg-[#EBEBEB] px-20 pt-10 pb-32">
          <div className="flex items-center ">
            <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
            <div>
              <h1 className="font-bold text-[#102821] text-3xl">
                About the Show: Brewing Indonesia's Finest
              </h1>
            </div>
          </div>
          <div className="mt-10 w-1/2">
            <p>
              Brewing Indonesia's Finest isn't just our theme, it's our mission. We're passionate about showcasing the exceptional quality and excellence of Indonesian coffee,
              from bean to cup. This inaugural show brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center border-2 px-3 py-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97.svg"} alt="" className="w-40" />
                </div>
                <h3 className="mt-20 text-center font-bold text-lg">
                  Discover diverse flavors
                </h3>
                <p className="mt-8 text-center text-sm">
                  Experience a diverse selection of coffees sourced from different regions across Indonesia.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-3 pt-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-1.svg"} alt="" className="w-40" />
                </div>
                <h3 className="mt-20 text-center font-bold text-lg">
                  Discover diverse flavors
                </h3>
                <p className="mt-8 text-center text-sm">
                  Experience a diverse selection of coffees sourced from different regions across Indonesia.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-3 py-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-2.svg"} alt="" className="w-40" />
                </div>
                <h3 className="mt-20 text-center font-bold text-lg">
                  Discover diverse flavors
                </h3>
                <p className="mt-8 text-center text-sm">
                  Experience a diverse selection of coffees sourced from different regions across Indonesia.
                </p>
              </div>
            </div>
          </div>
          {/* whats on */}
          <div className="flex items-center mt-10">
            <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
            <div>
              <h1 className="font-bold text-[#102821] text-3xl">
                What's On
              </h1>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-7">
            <div>
              <img src={"./assets/1-1@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-2@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-3@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-4@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-5@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-6@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1-7@2x.png"} alt="" />
            </div>
            <div>
              <img src={"./assets/1@2x.png"} alt="" />
            </div>
          </div>
          {/* whos there */}
        </div>
        <div className="relative flex flex-row-reverse border-2 border-[#2B2225] bg-[#4C6444]">
          <div className="absolute -top-16 left-5 w-1/2">
            <img src={"./assets/Group 241@2x.png"} alt="" className="w-11/12"/>
          </div>
          <div className="py-7 pl-7 bg-[#203731] rounded-3xl w-1/2">
            <div className="pt-3 pl-10 rounded-3xl bg-[#EBEBEB]">
              <div className="flex items-center">
                <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
                <div>
                  <h1 className="font-bold text-[#102821] text-3xl">
                    Brewing Up
                  </h1>
                </div>
              </div>
              <h1 className="ml-7 mt-2 font-bold text-[#102821] text-3xl">
                a Perfect Collaboration!
              </h1>
              <div className="w-3/4 mt-7">
                <p className="text-sm">
                  We're proud to announce our collaboration with industry leaders such as SCAI (Specialty Coffee Association of Indonesia), Poros Kopi, Emporium Pluit Mall, and PengenKopi.
                </p>
                <p className="text-sm mt-5">
                  Join us for an unforgettable experience celebrating the finest in Indonesian coffee. This event goes beyond a cafe show – it's a vibrant celebration of Indonesian coffee culture.
                </p>
                <p className="text-sm mt-5">
                  Seize the opportunity to learn, connect, and explore the latest coffee equipment, while experiencing the best that Indonesia has to offer!
                </p>
              </div>
              <div className="mt-7 flex gap-3 pb-7">
                <div>
                  <img src={"./assets/Logo Horizontal  Black Transparent@2x.png"} alt="" className="w-30 h-10" />
                </div>
                <div className="">
                  <img src={"./assets/PK_LOGO_MAIN_CLR@2x.png"} alt="" className=" h-10" />
                </div>
                <div className="">
                  <img src={"./assets/scai-logo-4@2x.png"} alt="" className="h-10" />
                </div>
                <div className="">
                  <img src={"./assets/logo_empo@2x.png"} alt="" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
