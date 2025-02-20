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

const Skill = () => {
  return (
    <div id="skill">
    <div className="py-7 m-5 text-center flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
          Skills
        </h2>
        <Divider className="w-24 h-1 mb-12 mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-orange-600" />
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

export default Skill