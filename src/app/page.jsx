import ImageSlider from "@/components/ImageSlider";
import RundownEvent from "@/components/RundownEvent";
import Rute from "@/components/Rute";
// import Link from 'next/navigation'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from "next/image";


export default function Home() {

  const images = [
    "./assets/image1.png",
    "./assets/02-Quadrato-01-a-1.png",
    "./assets/barista-preparing-coffee-coffee-machine.png",
    "./assets/barista-working-preparing-hot-cappuccino-close-up-coffee-cup-generated-by-artificial-intelligence.png"
  ]

  return (
    <>
      {/* Navbar */}
      <div className="relative z-40">
        <div className="xl:fixed lg:fixed w-full flex justify-center items-center h-29 border-4 border-[#2B2225] bg-[#EBEBEB]">
          <img src={"./assets/Group 47.png"} alt="" className="absolute xl:top-5 xl:left-16 xl:w-48 lg:w-28 lg:top-2 lg:left-5"/>
          <a href="#section1" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">HOME</a>
          <a href="#section2" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">WHAT'S ON</a>
          <a href="#section3" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">WHO'S THERE</a>
          <a href="#section4" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">GETTING HERE</a>
          <a href="#section5" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">RUNDOWN EVENT</a>
          <a href="#section6" className="xl:py-10 xl:px-5 xl:text-xl lg:text-md lg:px-2 lg:py-5 font-newScience">CONTACT US</a>
        </div>
      </div>

      {/* Home */}
      <section id="section1" className="max-h-screen">
        <div className="relative grid grid-cols-2 xl:pt-20 lg:pt-16">
          <div className="flex flex-wrap justify-center items-center bg-[#203731]">
            <div className="w-11/12 ml-16">
              <h1 className="font-newScience font-new-science font-bold xl:text-6xl lg:text-3xl text-[#CBBA9D]">
                Brewing Indonesia's Finest
              </h1>
              <h3 className="font-newScience mt-12 xl:text-2xl lg:text-lg text-[#CBBA9D]">
                Experience the culmination of Indonesian coffee culture at
              </h3>
              <h3 className="font-bold xl:text-2xl lg:text-lg font-newScience text-[#CBBA9D]">
                Emporium Pluit Mall, Jakarta. July 31st - August 4th, 2024
              </h3>
              <p className="xl:leading-loose lg:leading-7 mt-12 pr-36 xl:text-lg lg:text-md text-[#CBBA9D]">
                The Indonesia Cafe Show, themed 'Brewing Indonesia's Finest,' is the premier event celebrating the rich heritage and exceptional coffee of Indonesia. This inaugural event brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
              </p>
            </div>
          </div>
          <div className="">
            <ImageSlider images={images}>
              {images.map((s) => (
                <img src={s} alt="" />
              ))}
            </ImageSlider>
          </div>
          <div className="absolute -bottom-10 bg-[#8A966D] w-full h-16 border-2 border-[#2B2225]">
            <div className="flex items-center py-5 overflow-hidden">
              <div className="flex animate-loop-scroll space-x-10">
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
              </div>
              <div className="flex animate-loop-scroll space-x-10" aria-hidden="true">
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div><div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
                <div>
                  <SparklesIcon className="size-5 text-black" />
                </div>
                <div className="text-nowrap font-bold font-newScience">
                  BREWING INDONESIA'S FINEST
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <div className="bg-[#EBEBEB] pt-20 pb-32">
        <div className="mx-auto xl:max-w-screen-2xl lg:max-w-4xl pt-10">
          <div className="flex items-center">
            <div className="border-4 border-[#102821] xl:py-7 lg:py-5 rounded-full mr-10"></div>
            <div>
              <h1 className="font-bold text-[#102821] xl:text-5xl lg:text-4xl">
                About the Show: Brewing Indonesia's Finest
              </h1>
            </div>
          </div>
          <div className="mt-10 w-2/3">
            <p className="leading-loose xl:text-2xl lg:text-xl">
              Brewing Indonesia's Finest isn't just our theme, it's our mission. We're passionate about showcasing the exceptional quality and excellence of Indonesian coffee,
              from bean to cup. This inaugural show brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 xl:gap-20 lg:gap-7">
            <div className="flex justify-center items-center border-2 xl:px-2 xl:pt-10 lg:pt-5 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="xl:py-10 lg:py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97.svg"} alt="" className="xl:w-auto lg:w-32" />
                </div>
                <h3 className="mt-20 text-center font-newScience font-bold xl:text-2xl lg:text-md">
                  Discover diverse flavors
                </h3>
                <p className="mt-8 leading-7 text-center xl:text-xl lg:text-sm font-newScience">
                  Experience a diverse selection of coffees sourced from different regions across Indonesia.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-2 pt-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="xl:py-10 lg:py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-1.svg"} alt="" className="xl:w-auto lg:w-36"/>
                </div>
                <h3 className="mt-20 text-center font-newScience font-bold xl:text-2xl lg:text-md">
                  National brewing competition
                </h3>
                <p className="mt-8 leading-7 text-center xl:text-xl lg:text-sm font-newScience">
                  Witness the expertise of baristas at The Indonesia Brewers Competition & BrewTanding Tiga by AKSI SCAI
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-2 pt-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="xl:py-10 lg:py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-2.svg"} alt="" className="xl:w-auto lg:w-32"/>
                </div>
                <h3 className="mt-20 text-center font-bold xl:text-2xl lg:text-md font-newScience">
                  Connect with the community
                </h3>
                <p className="mt-8 text-center leading-7 xl:text-xl lg:text-sm font-newScience">
                  Join a community of passionate coffee lovers, industry professionals, and potential business collaborators
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* whats on */}
        <section id="section2" className="pt-7">
          <div className="mx-auto xl:max-w-screen-2xl lg:max-w-4xl">
            <div className="flex items-center pt-28">
              <div className="border-4 border-[#102821] py-7 rounded-3xl mr-10"></div>
              <div>
                <h1 className="font-bold font-newScience text-[#102821] text-5xl">
                  What's On
                </h1>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-10">
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
          </div>
        </section>
      </div>

      {/* whos there */}
      <section id="section3" className="relative xl:pt-28 lg:pt-16 bg-[#EBEBEB]">
        <div className=" flex flex-row-reverse border-2 border-[#2B2225] bg-[#4C6444]">
          <div className="absolute xl:-top-7 xl:left-7 lg:top-0 lg:left-5 xl:max-w-6xl lg:max-w-xl">
            <img src={"./assets/Group 241@2x.png"} alt="" className="" />
          </div>
          <div className="py-7 pl-10 bg-[#203731] rounded-l-3xl xl:max-w-6xl lg:max-w-xl">
            <div className="w-full pt-3 xl:pl-14 rounded-l-3xl bg-[#EBEBEB]">
              <div className="flex items-center pl-10">
                <div className="xl:border-4 lg:border-2 border-[#102821] xl:py-7 lg:py-3 rounded xl:mr-7 lg:mr-3 xl:ml-10 lg:ml-5"></div>
                <div>
                  <h1 className="font-bold font-newScience text-[#102821] xl:text-6xl lg:text-2xl">
                    Brewing Up
                  </h1>
                </div>
              </div>
              <h1 className="xl:ml-20 lg:ml-10 xl:mt-7 lg:mt-2 pl-10 font-newScience font-bold text-[#102821] xl:text-6xl lg:text-2xl">
                a Perfect Collaboration!
              </h1>
              <div className="xl:w-3/4 lg:w-3/4 xl:mt-16 lg:mt-5 pl-20">
                <p className="font-newScience xl:leading-loose xl:text-2xl lg:text-sm">
                  We're proud to announce our collaboration with industry leaders such as SCAI <span className="font-bold">(Specialty Coffee Association of Indonesia), Poros Kopi, Emporium Pluit Mall,</span> and <span className="font-bold">PengenKopi.</span>
                </p>
                <p className="font-newScience xl:leading-loose xl:text-2xl lg:text-sm xl:mt-14 lg:mt-3">
                  Join us for an unforgettable experience celebrating the finest in Indonesian coffee. This event goes beyond a cafe show – it's a vibrant celebration of Indonesian coffee culture.
                </p>
                <p className="font-newScience xl:leading-loose xl:text-2xl lg:text-sm xl:mt-14 lg:mt-3">
                  Seize the opportunity to learn, connect, and explore the latest coffee equipment, while experiencing the best that Indonesia has to offer!
                </p>
              </div>
              <div className="mt-7 flex xl:gap-5 lg:gap-3 pb-7 pl-20">
                <div>
                  <img src={"./assets/Logo Horizontal  Black Transparent@2x.png"} alt="" className="xl:h-20 xl:w-56 lg:w-36" />
                </div>
                <div className="">
                  <img src={"./assets/PK_LOGO_MAIN_CLR@2x.png"} alt="" className="xl:h-20 xl:w-20 lg:w-10" />
                </div>
                <div className="">
                  <img src={"./assets/scai-logo-4@2x.png"} alt="" className="xl:h-20 xl:w-20 lg:w-10" />
                </div>
                <div className="">
                  <img src={"./assets/logo_empo@2x.png"} alt="" className="xl:h-20 xl:w-56 lg:w-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Participant */}
      <div className="bg-[#EBEBEB]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex justify-center items-center pt-20">
            <div className="border-4 border-[#102821] xl:py-7 lg:py-5 rounded mr-7"></div>
            <div>
              <h1 className="font-bold text-[#102821] xl:text-5xl lg:text-3xl">
                Brand Participant
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-12 py-10 px-32 mt-10">
            <img src={"./assets/tenant/6.png"} alt="" className="" />
            <img src={"./assets/tenant/122ea7bbbb57c6708d3ac6c989341bd1.w970.h300.png"} alt="" />
            <img src={"./assets/tenant/23041295.png"} alt="" />
            <img src={"./assets/tenant/223738595_1953923794773381_4166939463297907421_n.png"} alt="" />
            <img src={"./assets/tenant/305410185_1093901451349243_5479258215677611317_n.png"} alt="" />
            <img src={"./assets/tenant/309359679_401358282189483_6065704401251197175_n.png"} alt="" />
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
        </div>
      </div>

      {/* Getting Here */}
      <section id="section4" className="pt-28 bg-[#EBEBEB]">
        <div className="relative flex justify-end bg-[#4C6444]">
          <div className="flex">
            <img src={"./assets/Emporium-Pluit-Mall@2x.png"} alt="" className="xl:max-w-7xl lg:max-w-2xl" />
          </div>
          <div className="absolute top-8 left-20 rounded-3xl xl:mt-6 xl:py-10 xl:px-28 lg:py-5 lg:px-16 bg-[#EBEBEB] w-1/2">
            <div className="pr-10 xl:pl-32 py-10">
              <div className="flex items-center">
                <div className="border-4 border-[#102821] xl:py-7 lg:py-5 rounded mr-7"></div>
                <div>
                  <h1 className="font-bold text-[#102821] xl:text-5xl lg:text-2xl font-newScience">
                    GETTING HERE
                  </h1>
                </div>
              </div>
              <p className="xl:mt-20 lg:mt-10 xl:text-2xl xl:leading-loose font-newScience w-10/12 lg:text-sm">Embark on an unforgettable coffee adventure at Indonesia Caffe Show, held at the vibrant Emporium Pluit Mall.
                Conveniently located amidst all the conveniences of downtown Jakarta, the event is easily accessible by various transportation options.
                Plan your Indonesia Caffe Show visit with our suggested travel routes.
                Explore our interactive map and discover the recommended travel options that best suit you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <Rute />

      {/* Rundown Event */}
      <section id="section5" className="pt-20 bg-[#EBEBEB]">
        <RundownEvent />
      </section>

      {/* Contact Us */}
      <section id="section6" className="bg-[#EBEBEB] pt-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex justify-center py-10 gap-28">
            <div className="bg-[#4C6444] border-2 border-[#707070] rounded-3xl px-20 py-20 text-[#EBEBEB]">
              <article className="text-wrap font-newScience">
                <h1 className="font-bold text-5xl mb-20">Get In Touch</h1>
                <div className="text-2xl">
                  <p>Visit us</p>
                  <p className="">Grand Slipi Tower Lt 10 MNO Jl. S Parman kav 22-24 Palmerah Jakarta Barat DKI Jakarta 11480</p>
                  <p className="mt-20">Whatsapp Chat :</p>
                  <p>Mon - Fri from 08.00 to 20.00 WIB</p>
                  <p>+6289507518628</p>
                  <p className="mt-20">Email :</p>
                  <p>marketing@pengenkopi.com</p>
                  <p className="mt-20">Social Media :</p>
                  <p>@indonesiacafeshow</p>
                </div>
              </article>
            </div>
            <div>
              <div className="flex items-center bg-[#EBEBEB] rounded-br-3xl">
                <div className="border-4 border-[#102821] py-7 rounded mr-10"></div>
                <h1 className="font-newScience text-6xl font-bold">
                  Contact Us
                </h1>
              </div>
              <div>
                <h1 className="text-[#4C6444] mb-10 mt-20 text-4xl font-bold">Have Questions? We're Here to Help</h1>
                <p className="text-xl font-newScience mb-10">Whether you need assistance with registration, logistics, or general inquiries, our dedicated team is eager to assist you.
                  Reach out to us and let's make your Indonesia Caffe Show experience a seamless one.</p>
                <div className="grid justify-items-end">
                  <input type="text" placeholder="Full Name" className="rounded-xl my-5 px-5 py-7 border w-full border-[#4C6444]" />
                  <input type="text" placeholder="WhatsApp Number" className="rounded-xl mb-5 px-5 py-7 border w-full border-[#4C6444]" />
                  <textarea name="" id="" placeholder="Tell Us What You Need" className="rounded-xl px-5 py-16 mb-5 border w-full border-[#4C6444]"></textarea>
                  <button className="bg-[#4C6444] text-[#EBEBEB] px-5 py-5 mt-5 rounded-lg text-xl font-newScience">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
