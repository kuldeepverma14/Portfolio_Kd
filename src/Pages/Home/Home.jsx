import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbBrandGithubFilled } from 'react-icons/tb'

function Home() {
  const [text, setText] = useState()
  const links = [
    { icon: <TbBrandGithubFilled />, to: "https://github.com/kuldeepverma14" },
    { icon: <FaLinkedinIn />, to: "https://www.linkedin.com/in/kuldeep-verma-4b00b5273/" },
    {
      icon: <FaTwitter />, to: "https://x.com/KuldeepVer31287?t=rimdhGvCM8nO4pVId4yhXw&s=08"
    }]
  const passion = ["Frontend developer", "JavaScript developer", "React.js developer"]
  const passionFunc = () => {
    let index = 0
    setInterval(() => {
      setText(passion[index])
      index = (index + 1) % passion.length
    }, 2000)

  }
  useEffect(() => {
    passionFunc()
  }, [])
  return (
    <div className='flex flex-col  justify-center h-screen'>
      <div>
        <h1 className='flex justify-center font-extrabold text-4xl'>Kuldeep Verma</h1>
        <p className='flex justify-center mt-5'>I am a passionate &nbsp;<i className='underline text-blue-500 font-bold'>{text}</i> &nbsp;  from Noida, Uttar Pradesh</p>
        <div className='flex justify-center mt-5'>
          <Header />
        </div>
        <div className='justify-center flex mt-5  space-x-2' >
          {links.map((item, i) => (
            <Link key={i} className='flex justify-center items-center bg-slate-400 h-8 rounded-full text-white hover:bg-blue-500 w-8 ' target='_blank' to={item.to} > {item.icon} </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home