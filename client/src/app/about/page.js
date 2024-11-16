import { Divider } from '@nextui-org/react'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="py-9 bg-gradient-to-r from-cyan-700 to-teal-500 text-white">
      <div className="p-0 m-5 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <Divider className=" w-12 h-3 mb-8 rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 " />
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-lg text-break">
            I'm a passionate full-stack developer with expertise in building web applications using the latest technologies.
            I specialize in creating clean, efficient, and user-friendly solutions. Based in Nepal, I aim to deliver the best
            digital experiences to my clients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
