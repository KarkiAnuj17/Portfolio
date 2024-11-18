import { Divider } from '@nextui-org/react'
import React from 'react'
import { LiaHtml5 } from "react-icons/lia";
import { TbBrandCss3 } from "react-icons/tb";
import { LiaJsSquare } from "react-icons/lia";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrGithub } from "react-icons/gr";

const About = () => {
  return (
    <div id="about" className="py-9 bg-gradient-to-r from-cyan-700 to-teal-500 text-white">
      <div className="p-0 m-5 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <Divider className=" w-12 h-3 mb-8 rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 " />
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-lg text-break">
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>
        </div>
        <div className="py-7 m-5 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5 ">Skills</h2>
          <Divider className=" w-12 h-3 mb-4 rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 " />
          <div className="flex text-align gap-5">
            <div>
          <LiaHtml5 className="text-8xl"/>
          <p className="text-xl">HTML</p>
          </div>
          <div>
          <TbBrandCss3 className="text-8xl "/>
          <p className="text-xl ">CSS</p>
          </div>
          <div>
          <LiaJsSquare className="text-8xl "/>
          <p className="text-xl ">JavaScript</p>
          </div>
          <div>
          <FaReact className="text-8xl "/>
          <p className="text-xl ">React JS</p>
          </div>
          <div>
          <RiTailwindCssLine className="text-8xl "/>
          <p className="text-xl ">Tailwind CSS</p>
          </div>
          <div>
          <FaNodeJs className="text-8xl "/>
          <p className="text-xl ">Node JS</p>
          </div>
          <div>
          <SiExpress className="text-8xl "/>
          <p className="text-xl ">Express JS</p>
          </div>
          <div>
          <DiMongodb className="text-8xl "/>
          <p className="text-xl ">Mongo DB</p>
          </div>
          <div>
          <GrGithub className="text-8xl "/>
          <p className="text-xl ">Github</p>
          </div>

          </div>
        
      </div>
    </div>
  )
}

export default About
