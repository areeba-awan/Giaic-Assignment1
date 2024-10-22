import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
     <nav className="bg-indigo-900 p-1">

      <div className=" container mx-auto px-4 flex justify-between items-center text-small">
        <h1 className="text-white text-xl font-extrabold hover:text-yellow-400"><b><i/>
          StartSmart<i/></b></h1>

        <ul className="flex items-center space-x-6">
          <li className="text-slate-200 hover:text-red-500 on duration-100">
            <Link href="./">Home</Link>
          </li>
          
          <li className="text-slate-200 hover:text-red-500 transition duration-100">
            <Link href="./About">About</Link>
          </li>
          <li className="text-slate-200 hover:text-red-500 transition duration-100">
            <Link href="./Blog">Blog</Link>
          </li>
          <li className="text-gray-300 hover:text-red-500 transition duration-100">
            <Link href="./Gallery">Gallery</Link>
          </li>
          <li className="text-gray-300 hover:text-red-500 transition duration-100">
            <Link href="./Services">Services</Link>
          </li>
          <li className="text-gray-300 hover:text-red-500 transition duration-100">
            <Link href="./contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}