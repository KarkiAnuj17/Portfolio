import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gradient-to-r from-cyan-700 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="mb-4">I'd love to hear from you! Feel free to reach out via email or connect with me on social media.</p>
        <div className="flex text-4xl justify-center items-center gap-4 ">
  <a
    href="mailto:Karkianuj111@gmail.com"
  >
    <MdEmail />
  </a>
  
  <a
    href="https://www.instagram.com/_anujkarki/"
  >
    <FaInstagram />
  </a>

  <a
    href="https://x.com/AnujKarkee"
  >
    <BsTwitterX />
  </a>

  <a
    href="https://www.linkedin.com/in/anuj-karki-5a48ab2a3/"
  >
    <CiLinkedin />
  </a>
</div>

      </div>
    </div>
  )
}

export default Contact