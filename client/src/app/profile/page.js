import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="p-8  flex flex-col justify-center items-center text-cente">
    <Image
      src="/photo.jpg"
      width={150}
      height={150}
      alt="Profile Picture"
      className="rounded-full shadow-lg"
    />
    <h1 className="text-6xl font-bold mt-6">Hi, I'm Anuj Karki</h1>
    <p className="text-xl mt-4">Full-Stack Developer | Based in Nepal</p>
    <Link
      href="#contact"
      className="mt-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white py-2 px-6 rounded-full shadow-lg hover:from-purple-500 hover:to-orange-500 transition-all duration-300"
    >
      Let's Connect
    </Link>
  </div>
  )
}

export default Profile