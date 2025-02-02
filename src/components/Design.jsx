import React from 'react'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Design = () => {
    return (
        <div id='designs' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32 '>
            <h1 className='text-center text-5xl font-light'>Design Projects</h1>
            <div className='grid grid-cols-1 gap-5'>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    // put carousel here
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Light'Em All</h1>
                        <p className='text-sm text-gray-600'>
                            Collaborated with a partner to implement the Light’Em All game in Java, using Kruskal’s algorithm to randomly generate a solvable gameboard with a spanning tree structure. Wrote approximately 1,200 lines of code, gaining experience in algorithm design, large-scale programming, and effective project planning and enhancing my problem-solving skills and ability to collaborate on complex software development tasks.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Design 