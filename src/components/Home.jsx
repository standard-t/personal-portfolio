import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { IoDocumentText } from "react-icons/io5";
import Typewriter from 'typewriter-effect';



const Home = () => {
    return (
        <div id='home' className='flex min-h-screen w-full items-center justify-center'>
            <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
                <img src={image} alt='' className='w-[250px] sm:[300px] rounded-full' />
                <div className="space-y-1" sm:space-y-3>
                    <h1 className='bg-gradient-to-r from-[#939e7b] to-[#4f6032] bg-clip-text text-4xl font-semibold text-transparent lg:text-6xl md:text-5xl'>Tara Standard</h1>
                    <h3 className='bg-[#4f6032] bg-clip-text text-xl font-semibold text-transparent lg:text-3xl md:text-2xl' >
                    <Typewriter
                    options={{
                    strings: ['UI/UX Designer', 'Web Developer', 'Artist', 'Student'],
                    autoStart: true,
                    loop: true,
                    }}
                    />
                    </h3>


                    <p className='max-w-[500px] text-sm text-gray-500'>
                    Hi there! I'm an aspiring UX/UI designer working towards my bachelor’s degree in Computer Science and Design at Northeastern University. I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development. I’m always looking for opportunities to connect with others, learn from mentors, and grow in the ever-evolving world of UX design!
                    </p>
                </div>

                <div className="flex gap-3">
                    <a href='https://github.com/standard-t'>
                    <button>
                    <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-[#4f6032] p-2 text-white transition-all duration-200 hover:scale-110 hover:border-[#4f6032] hover:bg-white hover:text-[#4f6032] md:h-12 md:w-12' />
                    </button>
                    </a>
                    <a href='https://www.linkedin.com/in/tara-standard/'>
                    <button>
                    <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-[#4f6032] p-2 text-white transition-all duration-200 hover:scale-110 hover:border-[#4f6032] hover:bg-white hover:text-[#4f6032] md:h-12 md:w-12' />
                    </button>
                    </a>
                    <a href="Resume.pdf">
                    <button>
                    <IoDocumentText className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-[#4f6032] p-2 text-white transition-all duration-200 hover:scale-110 hover:border-[#4f6032] hover:bg-white hover:text-[#4f6032] md:h-12 md:w-12'/>
                    </button>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Home 