import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar className="flex w-full items-center justify-between p-6 text-white bg-gradient-to-r from-cyan-700 to-teal-500">
        <NavbarBrand className="w-auto">
          <p className="font-bold text-4xl text-gray-100">ANUJ.</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex w-full justify-center text-xl gap-8">
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-200 hover:text-white">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-gray-200 hover:text-white">
              About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-200 hover:text-white">
              Resume
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-200 hover:text-white">
              Project
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="w-1/3 text-xl gap-6">
          <NavbarItem>
            <Button className="border border-solid border-blue-900 text-white p-2 rounded-3xl">
              <Link href="#" className="text-white no-underline">
                Connect with me
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
