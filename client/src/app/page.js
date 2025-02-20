import React from 'react';
import CustomNavbar from '@/component/navbar/page';

import Profile from './profile/page';
import About from './about/page';
import Project from './project/page';
import Contact from './contact/page';
import Skill from './skill/page';

const HomePage = () => {
  return (
    <div className='text-white bg-black'>
      <CustomNavbar />
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default HomePage;
