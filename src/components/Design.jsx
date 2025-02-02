import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const responsive2 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Design = () => {
    return (
        <div id='designs' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32 '>
            <h1 className='text-center text-5xl font-light'>Design Projects</h1>
            <div className='grid grid-cols-1 gap-5'>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive2} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./SkiMate/skimate1.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate2.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate3.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate4.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate5.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate6.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate7.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate8.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate9.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate10.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate11.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate12.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate13.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate14.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate15.png" /></div>
                        <div className='px-3'><img src="./SkiMate/skimate16.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>SkiMate</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Spearheaded the design of a mobile app to connect snow sports enthusiasts, managing the mobile interface, workflows, brand identity, and design system. Collaborated with the CEO, product manager, and developers to define the target audience and value proposition, setting the stage for a successful Phase 1 launch. Developed user requirements and scenarios to ensure a seamless, engaging experience.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./MassGen/poster1.png" /></div>
                        <div className='px-3'><img src="./MassGen/poster2.png" /></div>
                        <div className='px-3'><img src="./MassGen/poster3.png" /></div>
                        <div className='px-3'><img src="./MassGen/poster4.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><br /><img src="./MassGen/pamphlet1.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><br /><img src="./MassGen/pamphlet2.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><img src="./MassGen/card1.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><img src="./MassGen/card2.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>Mass General Safe Sleep</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Crafted a suite of posters, brochures, and promotional materials to educate new parents on safe sleeping practices for newborns, displayed throughout Mass General’s NICU and maternity ward. Simplified complex information to highlight key points, dispel misconceptions, and reduce infant sleep-related deaths through clear, accessible design, all while adhering to Mass General’s style guidelines.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./HotSauce/hotsauce1.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce2.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce3.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce4.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce5.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce6.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce7.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce8.png" /></div>
                        <div className='px-3'><img src="./HotSauce/hotsauce9.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>Project Hot Sauce</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Partnered with Northeastern Campus Operations and sensor engineers to design a data visualization system displaying live and historical HVAC system status (temperature, humidity, CO2) to identify trends and optimize functionality while staying consistent with Northeastern branding. Conducted user research and testing through interviews and observational studies to identify needs, create interaction scenarios, and inform design decisions, ultimately delivering a polished Figma prototype.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./NuSci/nusci1.png" /></div>
                        <div className='px-3'><img src="./NuSci/nusci3.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><img src="./NuSci/nusci2.png" /></div>
                        <div className='px-3'><img src="./NuSci/nusci4.png" /></div>
                        <div className='px-3'><img src="./NuSci/nusci5.png" /></div>
                        <div className='px-3'><img src="./NuSci/nusci6.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>NuSci Magazine</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Designed article pages and spreads for the print edition of a student-run science magazine, focusing on visually engaging layouts that complemented the content and enhanced readability. Worked closely with editors and writers to ensure each design aligned with the magazine’s vision and communicated complex scientific concepts in an accessible and visually appealing way. Contributed to the overall look and feel of the publication, helping to maintain a cohesive design language throughout.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./CraftFair/craft1.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft2.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft3.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft4.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft5.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft6.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft7.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft8.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft9.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft10.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft11.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft12.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft13.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft14.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft15.png" /></div>
                        <div className='px-3'><img src="./CraftFair/craft16.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>Needham Craft Fair Advertisements</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Collaborated with event administration to develop and execute social media campaigns promoting a local craft fair. Created eye-catching advertisements tailored to different platforms, aimed at increasing event visibility and engagement within the community. Worked closely with the team to align messaging with the fair’s branding and target audience, driving attendance and excitement.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./Coffee/machine1.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><br /><img src="./Coffee/machine2.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><br /><img src="./Coffee/machine3.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine4.png" /></div>
                        <div className='px-3 py-4'><br /><br /><img src="./Coffee/machine5.png" /></div>
                        <div className='px-3 py-4'><br /><br /><img src="./Coffee/machine6.png" /></div>
                        <div className='px-3'><img src="./Coffee/machine7.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine8.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine9.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine10.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine11.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine12.png" /></div>
                        <div className='px-3 py-4'><br /><br /><br /><img src="./Coffee/machine13.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>Wake Brew Experience Design</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            Collaborated with group-mates to create an innovative coffee machine that uses caffeine diffusion, ambient lighting, and music to gently wake users. Through a user-centered design approach, we mapped the waking-up experience, created storyboards, and prototyped interactive flows via sketches. Our iterative process included user studies to refine functionality and ensure an intuitive, seamless experience, culminating in a polished, high-fidelity storyboard that captures the final product's impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Design 