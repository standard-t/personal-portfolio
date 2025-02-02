import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8 '>
            <h1 className='text-center text-6xl font-light text-[#4f6032]'>Get in Touch!</h1>
            <form className=' flex w-full max-w-medium flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-x' action="https://formsubmit.co/standard.t@northeastern.edu" method="POST">
                <div className='flex flex-col gap-4 '>
                    <input type='text' name="name" placeholder='Full Name' className='rounded-lg border-2 border-[#939e7b] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#f3f7eb] focus:ring-2 focus:ring-[#4f6032]' required />
                    <input type='email' name="email" placeholder='Email' className='rounded-lg border-2 border-[#939e7b] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#f3f7eb] focus:ring-2 focus:ring-[#4f6032]' required />
                </div>
                <textarea type='text' name='message' placeholder='Your Message' className=' w-full resize-none rounded-lg border-2 border-[#939e7b] px-4 py-3 h-120 text-lg outline-none transition-all duration-200 hover:bg-[#f3f7eb] focus:ring-2 focus:ring-[#4f6032]'></textarea>
                <button type='submit' className='rounded-lg border-2 border-[#4f6032] bg-[#778459] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#4f6032]'>Send Message</button>
                <input type="hidden" name="_next" value="https://tara-standard.netlify.app/#home"></input>
            </form>

        </div >
    )
}

export default Contact 