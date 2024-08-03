import { useEffect, useState } from 'react'
import mypic from "../.././assets/pic.jpeg"
import { FaRegSmileBeam } from 'react-icons/fa'
import { GoProjectRoadmap } from 'react-icons/go'
import { GiHappySkull } from 'react-icons/gi'
import ProgessBar from '../../components/ProgessBar'
import ImageComponent from '../../components/ImageComponents'
function About() {
  const [text, setText] = useState("Front-end developer")
  const profile = ["Front-end developer", "JavaScript developer", "React.js developer"]

  const profileFunc = () => {
    let index = 0
    setInterval(() => {
      setText(profile[index])
      index = (index + 1) % profile.length
    }, 1000)
  }

  useEffect(() => {
    profileFunc()
  }, [])

  function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const differenceInMillis = Date.now() - birthDate.getTime();
    const differenceInDate = new Date(differenceInMillis);

    return Math.abs(differenceInDate.getUTCFullYear() - 1970);
  }

  const myBirthdate = '1999-01-01';
  const myAge = calculateAge(myBirthdate);

  const skillsData = [
    {
      skill: "HTML",
      score: "99"
    },
    {
      skill: "CSS",
      score: "90"
    },
    {
      skill: "sCSS",
      score: "90"
    },
    {
      skill: "JavaScript",
      score: "95"
    },
    {
      skill: "TypeScript",
      score: "90"
    },
    {
      skill: "React.js",
      score: "95"
    },
    {
      skill: "Redux Toolkit",
      score: "95"
    },
    {
      skill: "JSON",
      score: "99"
    },
    {
      skill: "DSA",
      score: "70"
    },
    {
      skill: "Tailwind CSS",
      score: "95"
    },
    {
      skill: "Bootstrap",
      score: "95"
    },
    {
      skill: "Git",
      score: "90"
    },
    {
      skill: "Github",
      score: "90"
    },
    {
      skill: "Postman",
      score: "95"
    },
  ]

  return (
    <div className=' xsm:bg-black text-white mt-5 p-5'>
      <div className='flex items-center space-x-5'> <h1 className='text-[#AAAAAA]'>ABOUT</h1> <p className='bg-blue-500 w-20 h-[2px]' ></p> </div>
      <h1 className='text-2xl xsm:text-4xl font-semibold'>LEARN MORE ABOUT ME</h1>
      <ImageComponent mypic={mypic} />
      <div className='grid xl:grid-cols-4 mt-5'>
      {/*   <div className='xl:col-span-1 flex justify-center items-center' > <img src={mypic} className='object-cover h-52  rounded-full w-52' alt="notfound" /> </div> */}
        <div className='xl:col-span-3 mt-5 xl:mt-0' >
          <i className='underline text-blue-500 font-bold'>{text}</i>
          <div>I am a frontend developer passionate about creating intuitive and dynamic user interfaces.</div>
          <div className=''>
            <div className='flex items-center'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Birthday :&nbsp;&nbsp; </h1> <p className='flex items-center'> 01-01-1999</p> </div>
            <div className='flex items-center'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Age :&nbsp;&nbsp; </h1> <p className='flex items-center'> {myAge} Years </p> </div>
            <div className='flex items-center text-nowrap' > <p className='text-2xl text-blue-500 text-nowrap' > {">"}</p>&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Degree :&nbsp;&nbsp;</h1> <p className='flex items-center'> Bachelor of Technology(B.Tech)</p> </div>
            <div className='flex items-center'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Phone :&nbsp;&nbsp; </h1> <p className='flex items-center'> 9166828589</p> </div>
            <div className='flex items-center' > <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Email :&nbsp;&nbsp; </h1> <a href="mailto:kd2017031059@gmail.com" className="flex items-center"> kd2017031059@gmail.com</a></div>
            <div className='flex items-center'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;<h1 className='font-bold flex items-center'>Freelance :&nbsp;&nbsp; </h1> <p className='flex items-center'> Available</p> </div>
          </div>
          <div className='ml-5'>
            <ul className='list-disc'>
              <li className=''>Passionate and detail-oriented Software Developer with over 2+ years of experience.</li>
              <li>Well-versed in developing single-page applications (SPAs) and proficient in analyzing Document Object Mode (DOM)layout and JavaScript functions for cross-browser compatibility.</li>
              <li>Skilled in creating custom reusable React component libraries, optimizing website performance using Redux
                architecture  and Object-Oriented concepts.</li>
              <li>Experienced in React.js concepts such as one-way data flow, Virtual DOM, JSX.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' md:flex  md:space-x-4 mt-20'>
        <div className='flex flex-col relative items-center py-5  w-[100%] md:w-[33%] bg-black xsm:bg-[#0D0D0D] shadow-xl'>
          <div className='absolute -mt-10 text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><FaRegSmileBeam /></div>
          <p className='mt-3 text-2xl'>10</p>
          <p className='mt-3'>Happy Clients</p>
        </div>
        <div className='flex flex-col relative items-center py-5 mt-10 md:mt-0 w-[100%] md:w-[33%] bg-black xsm:bg-[#0D0D0D] shadow-xl'>
          <div className='absolute -mt-10 text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><GoProjectRoadmap /></div>
          <p className='mt-3 text-2xl'>12</p>
          <p className='mt-3'>Projects</p>
        </div>
        <div className='flex flex-col relative items-center py-5 mt-10 md:mt-0 w-[100%] md:w-[33%] bg-black xsm:bg-[#0D0D0D] shadow-xl'>
          <div className='absolute -mt-10 text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><GiHappySkull /></div>
          <p className='mt-3 text-2xl'>2</p>
          <p className='mt-3'>Appraisals</p>
        </div>
      </div>
      <div className='mt-10 '>
        <div className='flex items-center gap-5'> <h1 className='text-[#AAAAAA]'>SKILLS</h1> <p className='bg-blue-500 w-20 h-[2px]' ></p> </div>
        <div className='mt-5 grid sm:grid-cols-2 gap-5   '>
          <ProgessBar skillsData={skillsData} />
        </div>
      </div>
    </div>
  )
}

export default About