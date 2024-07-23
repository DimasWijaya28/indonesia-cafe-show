import BrandParticipant from "@/components/BrandParticipant";
import ImageSlider from "@/components/ImageSlider";
import RundownEvent from "@/components/RundownEvent";
import Rute from "@/components/Rute";
import { Bars3Icon, SparklesIcon } from '@heroicons/react/24/solid'
// import Link from 'next/navigation'

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
      <div className="container mx-auto pt-16">
        {/* Home */}
        <section id="section1" className="">
          <div className="">
            <ImageSlider images={images}>
              {images.map((s) => (
                <img src={s} alt="" />
              ))}
            </ImageSlider>
          </div>
          <div className="bg-[#203731] px-2 py-3">
            <h1 className="font-newScience font-bold text-4xl text-[#CBBA9D]">
              Brewing Indonesia's Finest
            </h1>
            <h2 className="font-newScience text-md font-light mt-4 text-[#CBBA9D]">
              Experience the culmination of Indonesian coffee culture at
              <span className="font-semibold"> Emporium Pluit Mall, Jakarta. July 31st - August 4th, 2024</span>
            </h2>
            <p className="mt-3 font-extralight leading-7 text-md text-[#CBBA9D]">
              The Indonesia Cafe Show, themed 'Brewing Indonesia's Finest,' is the premier event celebrating the rich heritage and exceptional coffee of Indonesia. This inaugural event brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
            </p>
          </div>

          <div className="bg-[#8A966D] w-full h-16 border-2 border-[#2B2225]">
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
        </section >

        {/* About */}
        <div className="bg-[#EBEBEB] px-3 py-5">
          <div className="flex items-start">
            <div className="border-4 border-[#102821] py-4 rounded-full mr-5"></div>
            <div>
              <h1 className="font-bold text-[#102821] font-newScience text-3xl">
                About the Show: Brewing Indonesia's Finest
              </h1>
            </div>
          </div>
          <div className="mt-5">
            <p className="leading-7 text-md">
              Brewing Indonesia's Finest isn't just our theme, it's our mission. We're passionate about showcasing the exceptional quality and excellence of Indonesian coffee,
              from bean to cup. This inaugural show brings together industry professionals, cafe owners, and coffee enthusiasts for a unique experience.
            </p>
          </div>
          <div className="mt-10 grid grid-rows-1 gap-5">
            <div className="flex justify-center items-center border-2 xl:px-2 xl:pt-10 lg:pt-5 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="px-10 py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97.svg"} alt="" className="" />
                </div>
                <h3 className="mt-7 text-center font-newScience text-xl font-bold">
                  Discover diverse flavors
                </h3>
                <p className="mt-6 leading-7 text-center font-newScience">
                  Experience a diverse selection of coffees sourced from different regions across Indonesia.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-2 pt-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="px-10 py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-1.svg"} alt="" className="" />
                </div>
                <h3 className="mt-7 text-center font-newScience font-bold text-xl">
                  National brewing competition
                </h3>
                <p className="mt-6 leading-7 text-center font-newScience">
                  Witness the expertise of baristas at The Indonesia Brewers Competition & BrewTanding Tiga by AKSI SCAI
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 px-2 pt-10 bg-[#CBBA9D] border-black rounded-3xl">
              <div className="px-10 py-5">
                <div className="flex justify-center">
                  <img src={"./assets/Group 97-2.svg"} alt="" className="" />
                </div>
                <h3 className="mt-7 text-center font-bold text-xl font-newScience">
                  Connect with the community
                </h3>
                <p className="mt-6 text-center leading-7 font-newScience">
                  Join a community of passionate coffee lovers, industry professionals, and potential business collaborators
                </p>
              </div>
            </div>
          </div>

          {/* whats on */}
          <section id="section2" className="pt-10">
            <div className="">
              <div className="flex items-center">
                <div className="border-4 border-[#102821] py-4 rounded-3xl mr-5"></div>
                <div>
                  <h1 className="font-bold text-[#102821] font-newScience text-3xl">
                    What's On
                  </h1>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
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
        </div >

        {/* whos there */}
        < section id="section3" className="relative bg-[#EBEBEB]" >
          <div className="border-2 border-[#2B2225] bg-[#4C6444]">
            <div className="">
              <img src={"./assets/Group 241@2x.png"} alt="" className="" />
            </div>
            <div className="bg-[#203731] p-5">
              <div className="w-full rounded-3xl px-5 py-5 bg-[#EBEBEB]">
                <div className="flex items-center">
                  <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
                  <div>
                    <h1 className="font-bold font-newScience text-[#102821] text-3xl">
                      Brewing Up
                    </h1>
                  </div>
                </div>
                <h1 className="ml-7 font-newScience font-bold text-[#102821] text-3xl">
                  a Perfect Collaboration!
                </h1>
                <div className="mt-5">
                  <p className="font-newScience xl:leading-loose xl:text-xl lg:text-sm">
                    We're proud to announce our collaboration with industry leaders such as SCAI <span className="font-bold">(Specialty Coffee Association of Indonesia), Poros Kopi, Emporium Pluit Mall,</span> and <span className="font-bold">PengenKopi.</span>
                  </p>
                  <p className="font-newScience mt-3">
                    Join us for an unforgettable experience celebrating the finest in Indonesian coffee. This event goes beyond a cafe show – it's a vibrant celebration of Indonesian coffee culture.
                  </p>
                  <p className="font-newScience mt-3">
                    Seize the opportunity to learn, connect, and explore the latest coffee equipment, while experiencing the best that Indonesia has to offer!
                  </p>
                </div>
                <div className="mt-7 flex items-center gap-5">
                  <div>
                    <img src={"./assets/Logo Horizontal  Black Transparent@2x.png"} alt="" className="" />
                  </div>
                  <div className="">
                    <img src={"./assets/PK_LOGO_MAIN_CLR@2x.png"} alt="" className="" />
                  </div>
                  <div className="">
                    <img src={"./assets/scai-logo-4@2x.png"} alt="" className="" />
                  </div>
                  <div className="">
                    <img src={"./assets/logo_empo@2x.png"} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Brand Participant */}
        <BrandParticipant/>


        {/* Getting Here */}
        < section id="section4" className="bg-[#4C6444] pb-2" >
          <div className="">
            <img src={"./assets/Emporium-Pluit-Mall@2x.png"} alt="" className="" />
          </div>
          <div className="rounded-3xl bg-[#EBEBEB] mx-5 my-7 px-5 py-7">
            <div className="flex items-center">
              <div className="border-4 border-[#102821] py-5 rounded mr-7"></div>
              <div>
                <h1 className="font-bold text-[#102821] text-3xl font-newScience">
                  GETTING HERE
                </h1>
              </div>
            </div>
            <p className="mt-7 text-md leading-7 font-newScience">Embark on an unforgettable coffee adventure at Indonesia Caffe Show, held at the vibrant Emporium Pluit Mall.
              Conveniently located amidst all the conveniences of downtown Jakarta, the event is easily accessible by various transportation options.
              Plan your Indonesia Caffe Show visit with our suggested travel routes.
              Explore our interactive map and discover the recommended travel options that best suit you.</p>
          </div>
        </section >

        {/* Google Maps */}
        < Rute />

        {/* Rundown Event */}
        < section id="section5" className="bg-[#EBEBEB] pt-10" >
          <RundownEvent />
        </section >

        {/* Contact Us */}
        < section id="section6" className="bg-[#EBEBEB] pt-10" >
          <div className="bg-[#4C6444] border-2 px-5 py-5 border-[#707070] text-[#EBEBEB]">
            <article className="text-wrap font-newScience">
              <h1 className="font-bold text-3xl mb-7">Get In Touch</h1>
              <div className="text-xl font-light">
                <p>Visit us</p>
                <p className="">Grand Slipi Tower Lt 10 MNO Jl. S Parman kav 22-24 Palmerah Jakarta Barat DKI Jakarta 11480</p>
                <p className="mt-5">Whatsapp Chat :</p>
                <p>Mon - Fri from 08.00 to 20.00 WIB</p>
                <p>+6289507518628</p>
                <p className="mt-5">Email :</p>
                <p>marketing@pengenkopi.com</p>
                <p className="mt-5">Social Media :</p>
                <p>@indonesiacafeshow</p>
              </div>
            </article>
          </div>
          <div>
            <div className="flex items-center bg-[#EBEBEB] p-7">
              <div className="border-4 border-[#102821] py-5 rounded mr-5"></div>
              <h1 className="font-newScience text-3xl font-bold">
                Contact Us
              </h1>
            </div>
            <div className="px-7">
              <h1 className="text-[#4C6444] text-3xl mb-5 font-bold">Have Questions? We're Here to Help</h1>
              <p className="text-md font-newScience">Whether you need assistance with registration, logistics, or general inquiries, our dedicated team is eager to assist you.
                Reach out to us and let's make your Indonesia Caffe Show experience a seamless one.</p>
              <div className="grid justify-items-end">
                <input type="text" placeholder="Full Name" className="rounded-xl my-5 px-3 py-4 border w-full border-[#4C6444]" />
                <input type="text" placeholder="WhatsApp Number" className="rounded-xl mb-5 px-3 py-4 border w-full border-[#4C6444]" />
                <textarea name="" id="" placeholder="Tell Us What You Need" className="rounded-xl px-3 py-4 mb-5 border w-full border-[#4C6444]"></textarea>
                <button className="bg-[#4C6444] text-[#EBEBEB] px-3 py-2 rounded-lg text-md font-newScience font-semibold">Contact Us</button>
              </div>
            </div>
          </div>
        </section >
        <section className="bg-[#CBBA9D] px-5 py-3">
          <div className="flex justify-center">
            <div>
              <img src={"./assets/Group 47.png"} alt="" className="" />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <h1 className="font-newScience font-semibold text-lg">
              In Collaboration with:
            </h1>
          </div>
          <div className="mt-7 flex items-center gap-5">
            <div>
              <img src={"./assets/ICC24_LEAGUEbarat-300x300.png"} alt="" className="w-52" />
            </div>
            <div className="">
              <img src={"./assets/PK_LOGO_MAIN_CLR@2x.png"} alt="" className="w-20" />
            </div>
            <div className="">
              <img src={"./assets/scai-logo-4@2x.png"} alt="" className="w-20" />
            </div>
            <div className="">
              <img src={"./assets/logo_empo@2x.png"} alt="" className="w-52" />
            </div>
          </div>

        </section>
      </div>

    </>
  )
}
