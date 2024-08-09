import { useState } from "react"
import { BiSolidPhoneCall } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoShareSocial } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { TbBrandGithubFilled } from "react-icons/tb"
import { Link } from "react-router-dom"
import emailjs from 'emailjs-com';

const Contact = () => {
    const links = [
        { icon: <TbBrandGithubFilled />, to: "https://github.com/kuldeepverma14", name: "Github" },
        { icon: <FaLinkedinIn />, to: "https://www.linkedin.com/in/kuldeep-verma-4b00b5273/", name: "Linkedin" },
        {
            icon: <FaTwitter />, to: "https://x.com/KuldeepVer31287?t=rimdhGvCM8nO4pVId4yhXw&s=08", name: "X"
        }]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData2 = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            subject: formData.subject,
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData2,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            .then((result) => {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                setStatus('Error sending message.');
                console.error('EmailJS error:', error);
            });
    };
    console.log(status)
    return (
        <>
            <div className=' xsm:bg-black text-white mt-5 p-5'>
                <div className='flex items-center space-x-5'> <h1 className='text-[#AAAAAA]'>CONTACT</h1> <p className='bg-blue-500 w-20 h-[2px]' ></p> </div>
                <h1 className='text-2xl xsm:text-4xl font-semibold'>CONTACT ME</h1>
                <div className="grid  grid-cols-12 mt-10 lg:mt-5 gap-5 ">
                    <div className=" flex col-span-12 lg:col-span-6 gap-5 bg-[#34495e] p-5">
                        <div className="flex items-center"><div className=' text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><CiLocationOn /></div></div>
                        <div>
                            <p className="font-semibold">Address</p>
                            <p>Noida, UP</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex gap-5 bg-[#34495e] p-5">
                        <div className="flex items-center"><div className=' text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><IoShareSocial /></div></div>
                        <div>
                            <p className="font-semibold">Social Media</p>
                            <div className='justify-center flex  relative space-x-3 mt-2' >
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
                    <div className="col-span-12 lg:col-span-6">
                        <div className="col-span-12 lg:col-span-6 flex gap-5 bg-[#34495e] p-5">
                            <div className="flex items-center"><div className=' text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><MdEmail /></div></div>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p><a href="mailto:kd2017031059@gmail.com" className="flex items-center"> kd2017031059@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex gap-5 bg-[#34495e] p-5">
                        <div className="flex items-center"><div className=' text-2xl text-blue-500 bg-[#2D2D2D] h-10 w-10 rounded-full flex justify-center items-center' ><BiSolidPhoneCall /></div></div>
                        <div>
                            <p className="font-semibold">Call Me</p>
                            <p>+91 9166828589</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit} className="bg-black xsm:bg-[#0D0D0D] shadow-lg py-10 px-3">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="col-span-1">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-[#282828] w-full px-2 py-1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-[#282828] w-full px-2 py-1"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-5">
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="bg-[#282828] w-full px-2 py-1"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-5">
                            <div className="col-span-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-[#282828] w-full px-2 py-1"
                                    rows="10"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send Message
                            </button>
                         </div>
                        {status && <p className="mt-4 text-white">{status}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact