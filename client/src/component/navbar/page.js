import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Navbar className="flex w-full items-center justify-center p-5 ">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <NavbarBrand>
          <p className="font-bold text-4xl text-gray-100">ANUJ.</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex justify-center text-xl gap-8">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#skill" aria-current="page">
              Skill
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#about">
              About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#project">
              Project
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
