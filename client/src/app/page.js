import React from 'react';
import CustomNavbar from '@/component/navbar/page';

import Profile from './profile/page';
import About from './about/page';
import Project from './project/page';
import Contact from './contact/page';

const HomePage = () => {
  return (
    <div >
      <CustomNavbar />
      <Profile/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default HomePage;
