import { Divider } from '@nextui-org/react'
import React from 'react'


const About = () => {
  return (
    <div id="about" className="py-9 ">
      <div className="p-0 m-5 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
          About me 
        </h2>
        <Divider className="w-24 h-1 mb-12 mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-orange-600" />
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-lg text-break">
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>
        </div>
    </div>
  )
}

export default About
