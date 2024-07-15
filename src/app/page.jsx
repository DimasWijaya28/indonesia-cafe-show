import ImageSlider from "@/components/ImageSlider";
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
      {/* Navbar */}
      <div className="relative z-40">
        <div className="fixed w-full flex justify-center items-center h-29 border border-3 border-[#2B2225] bg-[#EBEBEB]">
          <img src={"./assets/Group 47.png"} alt="" className="absolute top-2 left-12 w-40" />
          {/* <div className="py-7 px-5">HOME</div> */}
          <a href="#section1" className="py-7 px-5">HOME</a>
          <a href="#section2" className="py-7 px-5">WHAT'S ON</a>
          <a href="#section3" className="py-7 px-5">WHO'S THERE</a>
          <a href="#section4" className="py-7 px-5">GETTING HERE</a>
          <a href="#section5" className="py-7 px-5">RUNDOWN EVENT</a>
          <a href="#section6" className="py-7 px-5">CONTACT US</a>
          {/* <div className="py-7 px-5">WHATS ON</div> */}
          {/* <div className="py-7 px-5">WHOS THERE</div> */}
          {/* <div className="py-7 px-5">GETTING HERE</div> */}
          {/* <div className="py-7 px-5">RUNDOWN EVENT</div> */}
          {/* <div className="py-7 px-5">CONTACT US</div> */}
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Home */}
        <section id="section1">
          <div className="relative grid grid-cols-2 pt-20">
            <div className="flex flex-wrap justify-center items-center pt-12 pb-24 bg-[#203731]">
              <div className="px-12">
                <h1 className="font-bold text-5xl text-[#CBBA9D]">
                  Brewing Indonesia's Finest
                </h1>
                <h3 className="mt-12 text-2xl text-[#CBBA9D]">
                  Experience the culmination of Indonesian coffee culture at
                </h3>
                <h3 className="font-bold text-2xl text-[#CBBA9D]">
                  Emporium Pluit Mall, Jakarta. July 31st - August 4th, 2024
                </h3>
                <p className="mt-12 text-wrap text-[#CBBA9D]">
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
            <div className="flex absolute bottom-0 bg-[#8A966D] w-full h-20 border-2 border-[#2B2225]">
              <div className="flex items-center">
                footer
              </div>
            </div>
          </div>
        </section>

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
          <section id="section2">
            <div className="flex items-center pt-40">
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
          </section>
        </div>

        {/* whos there */}
        <section id="section3">
          <div className="relative flex flex-row-reverse border-2 border-[#2B2225] bg-[#4C6444]">
            <div className="absolute -top-20 left-10 w-1/2">
              <img src={"./assets/Group 241@2x.png"} alt="" className="" />
            </div>
            <div className="py-7 pl-7 bg-[#203731] rounded-l-3xl w-2/5">
              <div className="w-full pt-3 pl-10 rounded-l-3xl bg-[#EBEBEB]">
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
                <div className="w-full mt-7 pr-5">
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
        </section>

        {/* Brand Participant */}
        <div className="bg-[#EBEBEB]">
          <div className="flex justify-center items-center pt-20">
            <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
            <div>
              <h1 className="font-bold text-[#102821] text-3xl">
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

        {/* Getting Here */}
        <section id="section4">
        <div className="relative flex bg-[#4C6444]">
          <div className="flex justify-end">
            <img src={"./assets/Emporium-Pluit-Mall@2x.png"} alt="" className="w-1/2" />
          </div>
          <div className="absolute top-8 left-8 rounded-3xl px-32 py-10 bg-[#EBEBEB] w-1/2">
            <div className="">
              <div className="flex items-center">
                <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
                <div>
                  <h1 className="font-bold text-[#102821] text-3xl">
                    Getting Here
                  </h1>
                </div>
              </div>
            </div>
            <p className="mt-7 text-sm">Embark on an unforgettable coffee adventure at Indonesia Caffe Show, held at the vibrant Emporium Pluit Mall.
              Conveniently located amidst all the conveniences of downtown Jakarta, the event is easily accessible by various transportation options.
              Plan your Indonesia Caffe Show visit with our suggested travel routes.
              Explore our interactive map and discover the recommended travel options that best suit you.</p>
          </div>
        </div>
        </section>

        {/* Google Maps */}
        <div className="flex justify-evenly items-center px-14 h-10 border-y border-3 border-[#2B2225] bg-[#8A966D]">
          <div className="py-7 px-5">By Car</div>
          <div className="py-7 px-5">By Taxi</div>
          <div className="py-7 px-5">By Transjakarta</div>
          <div className="py-7 px-5">By Train</div>
        </div>
        <div className="bg-[#EBEBEB] flex justify-center items-center py-7 px-10">
          <iframe className="rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0245842754643!2d106.78885302591291!3d-6.127393960080999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d8d0db9e06d%3A0x54cb9f1766bde458!2sEmporium%20Pluit%20Mall!5e0!3m2!1sen!2sid!4v1720958863442!5m2!1sen!2sid" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Rundown Event */}
        <section id="section5">
        <div className="bg-[#4C6444] relative">
          <div className="bg-[#242424] w-5/12 pr-7 pb-7 rounded-br-3xl">
            <div className="flex items-center p-10 bg-[#EBEBEB] rounded-br-3xl">
              <div className="ml-10 border-4 border-[#102821] py-4 rounded mr-5"></div>
              <h1 className="text-2xl font-bold">
                Rundown Event
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-around pt-7 pb-3 w-3/4 border-b-2 border-[#242424]">
              <div>31 July</div>
              <div>01 August</div>
              <div>02 August</div>
              <div>03 August</div>
              <div>04 August</div>
            </div>
          </div>
          <div className="mt-10 w-3/5">
            <div>
              <img src={"./assets/Group 341@2x.png"} alt="" />
            </div>
            <div className="absolute inset-x-1 bottom-40 left-20 flex justify-center items-center">
              <div className="mr-64">
                <h1 className="text-3xl mb-5 font-bold text-[#EBEBEB]">
                  Day 1
                </h1>
                <span className="text-3xl font-bold text-[#EBEBEB]">
                  Wednesday 31
                </span>
                <h1 className="inline-block align-top text-xl font-bold text-[#EBEBEB]">
                  TH
                </h1>
              </div>
              <div className="grid grid-rows-4 w-1/2 gap-10 content-center">
                <div className="bg-[#EBEBEB] w-full flex shadow-2xl shadow-[#2B2225]">
                  <div className="bg-[#2B2225] w-32 rounded-xl m-3 flex flex-wrap p-3 justify-center items-center">
                    <p className="text-[#EBEBEB] text-sm">09.00 - 10.00</p>
                    <p className="text-[#EBEBEB] text-sm">WIB</p>
                  </div>
                  <div className="flex flex-wrap w-48 h-14 mt-5 items-center">
                    <p>Workshop</p>
                    <p className="font-bold">IBrc Judge Workshop</p>
                  </div>
                </div>
                <div className="bg-[#EBEBEB] w-full flex shadow-2xl shadow-[#2B2225]">
                  <div className="bg-[#2B2225] w-32 rounded-xl m-3 flex flex-wrap p-3 justify-center items-center">
                    <p className="text-[#EBEBEB] text-sm">10.00 - 16.00</p>
                    <p className="text-[#EBEBEB] text-sm">WIB</p>
                  </div>
                  <div className="flex flex-wrap w-48 h-14 mt-5 items-center">
                    <p>COMPETITION</p>
                    <p className="font-bold">Tanding Tiga Round 1</p>
                  </div>
                </div>
                <div className="bg-[#EBEBEB] w-full flex shadow-2xl shadow-[#2B2225]">
                  <div className="bg-[#2B2225] w-32 rounded-xl m-3 flex flex-wrap p-3 justify-center items-center">
                    <p className="text-[#EBEBEB] text-sm">17.00 - 18.00</p>
                    <p className="text-[#EBEBEB] text-sm">WIB</p>
                  </div>
                  <div className="flex flex-wrap w-32 h-14 mt-5 items-center">
                    <p>GAMES</p>
                    <p className="font-bold">Mini Challenges</p>
                  </div>
                </div>
                <div className="bg-[#EBEBEB] w-full flex shadow-2xl shadow-[#2B2225]">
                  <div className="bg-[#2B2225] w-32 rounded-xl m-3 flex flex-wrap p-3 justify-center items-center">
                    <p className="text-[#EBEBEB] text-sm">18.00 - 20.00</p>
                    <p className="text-[#EBEBEB] text-sm">WIB</p>
                  </div>
                  <div className="flex flex-wrap w-48 h-14 mt-5 items-center">
                    <p className="font-bold">TBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Contact Us */}
        <section id="section6">
        <div className="bg-[#EBEBEB] flex justify-center items-center p-10 px-28 gap-28">
          <div className="bg-[#4C6444] border-2 border-[#707070] rounded-3xl px-10 py-10 text-[#EBEBEB]">
            <article className="text-wrap">
              <h1 className="font-bold text-3xl mb-10">Get In Touch</h1>
              <p>Visit us</p>
              <p className="">Grand Slipi Tower Lt 10 MNO Jl. S Parman kav 22-24 Palmerah Jakarta Barat DKI Jakarta 11480</p>
              <p className="mt-10">Whatsapp Chat :</p>
              <p>Mon - Fri from 08.00 to 20.00 WIB</p>
              <p>+6289507518628</p>
              <p className="mt-10">Email :</p>
              <p>marketing@pengenkopi.com</p>
              <p className="mt-10">Social Media :</p>
              <p>@indonesiacafeshow</p>
            </article>
          </div>
          <div>
            <div className="flex items-center bg-[#EBEBEB] rounded-br-3xl">
              <div className="border-4 border-[#102821] py-4 rounded mr-5"></div>
              <h1 className="text-2xl font-bold">
                Contact Us
              </h1>
            </div>
            <div>
              <h1 className="text-[#4C6444] mb-5 mt-7 text-2xl font-bold">Have Questions? We're Here to Help</h1>
              <p>Whether you need assistance with registration, logistics, or general inquiries, our dedicated team is eager to assist you.
                Reach out to us and let's make your Indonesia Caffe Show experience a seamless one.</p>
              <div className="grid justify-items-end">
                <input type="text" placeholder="Full Name" className="rounded-xl my-5 px-5 py-3 border w-full border-[#4C6444]" />
                <input type="text" placeholder="WhatsApp Number" className="rounded-xl mb-5 px-5 py-3 border w-full border-[#4C6444]" />
                <textarea name="" id="" placeholder="Tell Us What You Need" className="rounded-xl px-5 py-3 mb-5 border w-full border-[#4C6444]"></textarea>
                <button className="bg-[#4C6444] text-[#EBEBEB] px-2 py-3 rounded-lg ">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

    </>
  )
}