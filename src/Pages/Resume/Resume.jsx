
function Resume() {
    return (
        <div className=' xsm:bg-black text-white mt-5 p-5'>
            <div className='flex items-center space-x-5'> <h1 className='text-[#AAAAAA]'>RESUME</h1> <p className='bg-blue-500 w-20 h-[2px]' ></p> </div>
            <h1 className='text-4xl font-semibold'>CHECK MY RESUME</h1>
            <div className='grid xl:grid-cols-2 mt-10'>
                <div>
                    <div>
                        <h1 className="font-bold text-3xl">Summary</h1>
                        <div className="grid grid-cols-12 mt-5 ">
                            <div className="relative col-span-1 bg-black xsm:bg-[#0D0D0D] w-[4px]">
                                <div className="bg-blue-500 h-5 w-5 absolute -ml-[8px] rounded-full"></div>
                            </div>
                            <div className="col-span-11  ">
                                <h1 className="text-blue-500 font-semibold text-xl"> KULDEEP VERMA</h1>
                                <p className="mt-2">I am passionate and detail-oriented Software Developer with over 2+ years of experience.Well-versed in developing single-page applications (SPAs) and proficient in analyzing Document Object Mode (DOM)layout and JavaScript functions for cross-browser compatibility.Skilled in creating custom reusable React component libraries, optimizing website performance using Redux
                                    architecture  and Object-Oriented concepts.</p>
                                <ul className="list-disc">
                                    <li>Noida,UP</li>
                                    <li>+91 9166828589</li>
                                    <li><a href="mailto:kd2017031059@gmail.com">Email</a></li>
                                    <li><a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/kuldeep-verma-4b00b5273/">Linkedin</a></li>
                                    <li><a target="_blank" rel="noreferrer noopener" href="https://github.com/kuldeepverma14">Github</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Resume