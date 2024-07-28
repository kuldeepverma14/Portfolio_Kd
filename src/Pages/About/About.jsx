import React, { useEffect, useState } from 'react'

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

  return (
    <div className=' bg-black text-white mt-5 p-5'>
      <div className='flex items-center space-x-5'> <h1 className='text-[#AAAAAA]'>ABOUT</h1> <p className='bg-blue-500 w-20 h-[2px]' ></p> </div>
      <h1 className='text-4xl font-semibold'>LEARN MORE ABOUT ME</h1>
      <div className='grid grid-cols-3 mt-5'>
        <div className='col-span-1' > <img src="" alt="notfound" /> </div>
        <div className='col-span-2' >
          <i className='underline text-blue-500 font-bold'>{text}</i>
          <div>I am a frontend developer passionate about creating intuitive and dynamic user interfaces.</div>
          <div className='grid grid-cols-2'>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Birthday :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <p className='flex items-center'> 01-01-1999</p> </div>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Age :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <p className='flex items-center'> {myAge} Years </p> </div>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Degree :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <p className='flex items-center'> Bachelor of Technology(B.Tech)</p> </div>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Phone :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <p className='flex items-center'> 9166828589</p> </div>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Email :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <a href="mailto:kd2017031059@gmail.com" className="flex items-center"> kd2017031059@gmail.com</a></div>
            <div className='flex'> <p className='text-2xl text-blue-500' > {">"}</p>&nbsp;&nbsp;&nbsp; <h1 className='font-bold flex items-center'>Freelance :&nbsp;&nbsp;&nbsp;&nbsp; </h1> <p className='flex items-center'> Available</p> </div>
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
    </div>
  )
}

export default About