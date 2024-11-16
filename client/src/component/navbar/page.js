import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar className="flex w-full items-center justify-between p-5 text-white bg-gradient-to-r from-cyan-700 to-teal-500">
        <NavbarBrand className="w-auto">
          <p className="font-bold text-4xl text-gray-100">ANUJ.</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex w-full justify-center text-xl gap-8">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" >
            Resume
              
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#about">
            About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#project" >
              Project
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="w-1/3 text-xl gap-6">
          <NavbarItem>
          <Button href="#" className="text-white bg-gradient-to-r from-purple-700 to-orange-700 p-3 rounded-3xl shadow-lg hover:from-purple-600 hover:to-orange-600">
              Connect with me
          </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
