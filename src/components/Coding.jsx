
import React from 'react'

const Coding = () => {
    return (
        <div id='coding' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32 '>
            <h1 className='text-center text-5xl font-light'>Coding Projects</h1>
            <div className='grid grid-cols-1 gap-5'>
                <div className="flex items-center text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg">
                    <video width="320" height="240" controls src="lightem.mov"></video>
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Light'Em All</h1>
                        <p className='max-w-[350px] text-sm text-gray-600'>
                            Collaborated with a partner to implement the Light’Em All game in Java, using Kruskal’s algorithm to randomly generate a solvable gameboard with a spanning tree structure. Wrote approximately 1,200 lines of code, gaining experience in algorithm design, large-scale programming, and effective project planning and enhancing my problem-solving skills and ability to collaborate on complex software development tasks.
                        </p>
                    </div>
                </div>
                <div className="flex items-center text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <video width="320" height="100" controls src="minesweeper.mov"></video>
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Minesweeper</h1>
                        <p className='max-w-[350px] text-sm text-gray-600'>
                            Implemented the functionality of a Minesweeper game in Java, utilizing Breadth-First Search (BFS) to efficiently reveal safe tiles and handle the game’s core logic. The project involved designing the gameboard, managing user interactions, and ensuring optimal performance while maintaining a smooth gameplay experience. This project enhanced my understanding of graph traversal algorithms and solidified my skills in implementing complex game logic.
                        </p>
                    </div>
                </div>
                <div className="flex items-center text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg">
                    <video width="320" height="240" controls src="pipes.mov"></video>
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Pipe Fantasy</h1>
                        <p className='max-w-[350px] text-sm text-gray-600'>
                            Implemented the functionality of a Pipe Dream game in Java, where players connect pipes to form a continuous path. Designed the logic to dynamically rotate and place tiles using graph algorithms, ensuring valid connections while providing an engaging gameplay experience. This project sharpened my problem-solving skills and deepened my understanding of grid-based algorithms and interactive game design.
                        </p>
                    </div>
                </div>
                <div className="flex items-center text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg">
                    <video width="320" height="240" controls src="whack-a-mole.mov"></video>
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Whack-a-Mole</h1>
                        <p className='max-w-[350px] text-sm text-gray-600'>
                            Implemented the functionality of a Whack-a-Mole game in Java, using a 2D array to represent the game grid and randomization to spawn moles at different locations. Game logic involved tracking player input, updating the grid, and calculating scores in real-time for an interactive experience. This project helped me improve my skills in handling arrays, randomization, and user interaction within game development.
                        </p>
                    </div>
                </div>
                <div className="flex items-center text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg">
                    <video width="320" height="240" controls src="typing.mov"></video>
                    <div className='px-10'>
                        <h1 className='text-3xl font-semibold py-2'>Typing Game</h1>
                        <p className='max-w-[350px] text-sm text-gray-600'>
                            Developed the core mechanics of a falling-strings typing game in Java, which generates random strings and animates their descent at a specified rate, captures user input, and validates with key even listeners. When player types a string, its color changes as a visual indicator, and input is restricted to that string until completed. This project enhanced my ability to work with game loops, manage real-time input, and implement efficient game logic in a dynamic environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Coding 