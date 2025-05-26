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
                            SkiMate is a mobile app designed to connect snow sports enthusiasts, fostering community and new connections. I contributed to the project by creating a cohesive brand identity, conducting user research, and designing intuitive workflows. Key features include a feed of reccommended users, a trip planning calendar, location-based recommendations, and a messaging system for users to connect before mutual matches. I worked closely with a cross-functional team to asses use cases and create an algorithm which would reccommend connections based on age, interests, location, among other preferences. Together we prioritized features for the Phase 1 launch while ensuring the app could scale with future iterations. The result is a polished Figma prototype which is in the process of being developed into a mobile app aimed at building an engaging, inclusive platform for the snow sports community.
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
                            For this project, I worked closely with the Professional Development Manager in the OB Department to create a suite of educational materials aimed at promoting safe sleep practices for newborns. The project’s goal was to simplify complex information, making it clear and accessible to all parents while addressing misconceptions and reducing sleep-related infant deaths. To achieve this, I designed posters, brochures, and crib cards that adhered to Mass General’s style guidelines, ensuring consistency and professionalism. The materials are to be displayed in the NICU and Maternity wards, providing crucial information to new parents at a critical time. Through this project I learned how to distill complex information into easily digestible content.
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
                            In collaboration with fellow students, I worked with Northeastern Campus Operations and sensor engineers to design a data visualization system that displays live and historical HVAC system data, focusing on temperature, humidity, and CO2 levels to identify trends and optimize system functionality. We conducted user interviews, affinity diagramming, and persona creation to gather insights, which helped define key features and use cases for the product. Using this information, we created storyboards and developed a low-fidelity prototype, which we tested with users to understand their pain points and mental models. Based on user feedback, we refined the design and delivered a polished Figma prototype and design system, enhancing the system's usability and effectiveness. This project strengthened my skills in collaboration, user research, and prototyping, while emphasizing the importance of aligning design and functionality with user needs.
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
                            For the print edition of a student-run science magazine, I designed article pages and spreads that are visually engaging while ensuring readability. I worked closely with editors and writers to ensure that each layout aligned with the magazine’s vision and made complex scientific concepts more accessible to a broad audience. By focusing on thoughtful design, I helped maintain a cohesive aesthetic throughout the publication. My role in this organization has deepened my skills in creating designs that balance creativity with clarity, ensuring the content was both informative and visually appealing.
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
                            In collaborated with the Needham Craft Fair event administration, I developed and executed social media campaigns promoting a local craft fair, with the goal of increasing visibility and community engagement. By creating eye-catching advertisements, I helped boost the event's online presence and attract a larger audience. Throughout the process I ensured that my designs and messaging aligned  with the fair’s branding and target audience to drive attendance and excitement. This project taught me how to craft targeted, audience-specific content that resonates with the community while effectively promoting an event.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <img src="cover.png" width="350" className="mx-auto block" />
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>Nature's Intelligence Research Dossier</h1>
                        <a href='https://drive.google.com/file/d/1dIf37-D_hz4M1JJmMC2hT0sNYMhDG9t-/view?usp=sharing'><b><u>READ FULL DOSSIER</u></b></a>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            This 20-page research dossier is a writted and visual documentation of my process exploring the evolution and future of biodesign and biomimicry, examining how nature has inspired innovation across cultures—from early inventions like planes and velcro to modern designs such as the Shinkansen Bullet Train and Zimbabwe’s Eastgate Centre. It highlights emerging sustainable materials like algae-based plastics and mycelium bricks, and features pioneers like textile designer Suzanne Lee. Through examples like the BIQ House in Hamburg, the dossier considers how biomaterials could shape environmentally conscious architecture, especially for temporary structures. It argues for a shift toward interdisciplinary design and engineering education, and concludes by asking whether humanity can move toward a truly reciprocal relationship with nature—using it not just as inspiration, but as a collaborator in sustainable progress.
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
                            For this project, my team and I developed an innovative coffee machine designed to gently wake users using caffeine diffusion, ambient lighting, and music. Our goal was to create a user-centered experience that redefined the traditional waking-up process. We began by mapping the experience, creating storyboards, and prototyping interactive flows, using sketches to visualize the product. Throughout the project, we followed an iterative design process that included multiple revisions of the product’s form and functionality, conducting user testing to refine our approach and ensure the experience was seamless and intuitive. This process ultimately led to a polished, high-fidelity storyboard that captured the final product's impact, teaching me how to combine user feedback with creative solutions to design a truly unique experience.
                        </p>
                    </div>
                </div>
                <div className="text-left justify-center space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-12 py-10 border-[#939e7b] rounded-lg ">
                    <Carousel responsive={responsive1} infinite={true} centerMode={true}>
                        <div className='px-3'><img src="./flow/flow1.png" /></div>
                        <div className='px-3'><img src="./flow/flow2.png" /></div>
                        <div className='px-3'><img src="./flow/flow3.png" /></div>
                        <div className='px-3'><img src="./flow/flow4.png" /></div>
                        <div className='px-3'><img src="./flow/flow5.png" /></div>
                        <div className='px-3'><img src="./flow/flow6.png" /></div>
                        <div className='px-3'><img src="./flow/flow7.png" /></div>
                        <div className='px-3'><img src="./flow/flow8.png" /></div>
                        <div className='px-3'><img src="./flow/flow9.png" /></div>
                        <div className='px-3'><img src="./flow/flow10.png" /></div>
                        <div className='px-3'><img src="./flow/flow11.png" /></div>
                        <div className='px-3'><img src="./flow/flow12.png" /></div>
                    </Carousel>
                    <div className='px-5'>
                        <h1 className='text-3xl font-semibold pt-5 pb-2'>FlowLogic Water Usage Tracker</h1>
                        <p className='text-sm text-gray-600 max-w-[650px]'>
                            This project involved assessing the cultural, monetary, and functional values of a traditional kitchen sink, with the goal of redesigning it to promote water conservation. Through an iterative process of sketching, finalizing designs, and creating a Figma prototype website, I developed a product line of sinks equipped with sensors and interfaces to track water usage. This line, offering various price points, encourages sustainability and affordability through habit tracking. I evaluated the revised product's values while ensuring it aligned with the original sink's cultural, monetary, and functional essence.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Design 