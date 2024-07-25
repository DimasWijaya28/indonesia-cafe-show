"use client"

export default function ContactUs() {    

    function sendMessage() {
        const url = `https://wa.me/6287798566706?text=Halo, Nama Saya ${fullName.value}. ${message.value}`
        window.open(url, "_blank")
    }

    return (
        <>
            < section id="section6" className="bg-[#EBEBEB] py-10" >
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
                        <form className="grid justify-items-end" onSubmit={sendMessage}>
                            <input type="text" id="fullName" placeholder="Full Name" className="rounded-xl my-5 px-3 py-4 border w-full border-[#4C6444]" />
                            <input type="text" placeholder="WhatsApp Number" className="rounded-xl mb-5 px-3 py-4 border w-full border-[#4C6444]" />
                            <textarea name="" id="message" placeholder="Tell Us What You Need" className="rounded-xl px-3 py-4 mb-5 border w-full border-[#4C6444]"></textarea>
                            <button type="submit" className="bg-[#4C6444] text-[#EBEBEB] px-3 py-2 rounded-lg text-md font-newScience font-semibold">Contact Us</button>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}