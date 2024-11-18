import { Divider } from '@nextui-org/react';
import React from 'react'

const Project = () => {
  const projects = [
    { title: "Project One", description: "A brief description of project one." },
    { title: "Project Two", description: "A brief description of project two." },
    { title: "Project Three", description: "A brief description of project three." },
  ];
  return (
    <div id="project" className="py-1 bg-gradient-to-r from-cyan-700 to-teal-500 text-white">
    <div className="p-0 m-5 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">Project</h2>
        <Divider className=" w-12 h-3 mb-8 rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 " />
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Project