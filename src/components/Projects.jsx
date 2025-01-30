import React from 'react'
import { BiLogoFigma, BiLogoLinkedin } from 'react-icons/bi'

const Projects = () => {
    return (
        <div id='projects' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32 '>
            <h1 className='text-center text-5xl font-light'>Projects</h1>
            <h1 className='text-align-left text-3xl font-light'>Design</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                    <br />
                    <div className='flex flex-col items-center'>
                        <a href='https://www.figma.com/design/zFNSfgiFywYGwDuJJaMYt1/Project-SkiMate---sms-designs?node-id=0-1&p=f&t=wRojzfmd3RLh4rDn-0'>
                            <button>
                                <BiLogoFigma className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-[#4f6032] p-2 text-white transition-all duration-200 hover:scale-110 hover:border-[#4f6032] hover:bg-white hover:text-[#4f6032] md:h-12 md:w-12' />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <h1 className='text-3xl font-semibold '>Project1</h1>
                    <h3 className='text-xl text-gray-700'>Techstack</h3>
                    <p className='text-sm text-gray-600'>
                        I’m passionate about combining my technical skills with my creative side to design user-friendly and intuitive digital experiences. Right now, I’m diving into courses and projects that help me learn more about user research, wireframing, prototyping, data visualization, and web development.
                    </p>
                </div>
            </div>
            <h1 className='text-align-left text-3xl font-light'>Coding</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <video controls src="lightem.mov"></video>
                    <h1 className='text-3xl font-semibold '>Light'Em All</h1>
                    <p className='text-sm text-gray-600'>
                        Collaborated with a partner to implement the Light’Em All game in Java, using Kruskal’s algorithm to randomly generate a solvable gameboard with a spanning tree structure. Wrote approximately 1,200 lines of code, gaining experience in algorithm design, large-scale programming, and effective project planning and enhancing my problem-solving skills and ability to collaborate on complex software development tasks.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <br /> <br /> <br />
                    <video controls src="minesweeper.mov"></video>
                    <h1 className='text-3xl font-semibold '>Minesweeper</h1>
                    <p className='text-sm text-gray-600'>

                        Implemented the functionality of a Minesweeper game in Java, utilizing Breadth-First Search (BFS) to efficiently reveal safe tiles and handle the game’s core logic. The project involved designing the gameboard, managing user interactions, and ensuring optimal performance while maintaining a smooth gameplay experience. This project enhanced my understanding of graph traversal algorithms and solidified my skills in implementing complex game logic.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <video controls src="pipes.mov"></video>
                    <h1 className='text-3xl font-semibold '>Pipe Fantasy</h1>
                    <p className='text-sm text-gray-600'>
                        Implemented the functionality of a Pipe Dream game in Java, where players connect pipes to form a continuous path. Designed the logic to dynamically rotate and place tiles using graph algorithms, ensuring valid connections while providing an engaging gameplay experience. This project sharpened my problem-solving skills and deepened my understanding of grid-based algorithms and interactive game design.
                    </p>
                </div>
                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-[#939e7b] rounded-lg hover:bg-[#f3f7eb] ">
                    <video controls src="whack-a-mole.mov"></video>
                    <h1 className='text-3xl font-semibold '>Whack-a-Mole</h1>
                    <p className='text-sm text-gray-600'>
                        Implemented the functionality of a Whack-a-Mole game in Java, using a 2D array to represent the game grid and randomization to spawn moles at different locations. Game logic involved tracking player input, updating the grid, and calculating scores in real-time for an interactive experience. This project helped me improve my skills in handling arrays, randomization, and user interaction within game development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects 