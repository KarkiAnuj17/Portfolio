import CustomNavbar from '@/component/navbar/page';
import React from 'react';
import Profile from './profile/page';
import About from './about/page';
import Skill from './skill/page';
import Project from './project/page';
import Contact from './contact/page';
import Footer from '@/component/footer/page';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <CustomNavbar />
        <Profile />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
