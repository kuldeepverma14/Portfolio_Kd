import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbBrandGithubFilled } from 'react-icons/tb'
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink'

function Home() {
  const [text, setText] = useState("Front-end developer")
  const links = [
    { icon: <TbBrandGithubFilled />, to: "https://github.com/kuldeepverma14", name: "Github" },
    { icon: <FaLinkedinIn />, to: "https://www.linkedin.com/in/kuldeep-verma-4b00b5273/", name: "Linkedin" },
    {
      icon: <FaTwitter />, to: "https://x.com/KuldeepVer31287?t=rimdhGvCM8nO4pVId4yhXw&s=08", name: "X"
    }]
  const passion = ["Front-end developer", "JavaScript developer", "React.js developer"]
  const passionFunc = () => {
    let index = 0
    setInterval(() => {
      setText(passion[index])
      index = (index + 1) % passion.length
    }, 1000)

  }
  useEffect(() => {
    passionFunc()
  }, [])
  return (
    <div className=' flex flex-col text-white bg-[#0D0D0D]  justify-center h-screen'>
      <div>
        <h1 className='flex justify-center  font-extrabold text-4xl'>Kuldeep Verma</h1>
        <p className='flex justify-center mt-5'>I am a passionate &nbsp;<i className='underline text-blue-500 font-bold'>{text}</i> &nbsp;  from Noida, Uttar Pradesh</p>
        <div className='flex justify-center mt-5'>
          <nav className=' '>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/resume">Resume</CustomNavLink>
            {/* <CustomNavLink to="/services">Services</CustomNavLink>
            <CustomNavLink to="/portfolio">Portfolio</CustomNavLink> */}
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </nav>
        </div>
        <div className='justify-center flex mt-5 relative space-x-3' >
          {links.map((item, i) => (
            <Link
              key={i}
              className="group flex justify-center items-center bg-slate-400 h-8 rounded-full  hover:bg-blue-500 w-8 relative"
              target="_blank"
              to={item.to}
            >
              {item.icon}
              <div className="absolute bg-blue-500 mt-16 px-2 shadow-2xl rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </div>
            </Link>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Home