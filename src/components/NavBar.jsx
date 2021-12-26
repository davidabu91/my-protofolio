import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import file from '../assets/DavidAbou.pdf';



export default function NavBar() {
  return (
    <header className="bg-gray-900 lg:h-32" >
      <div className="container mx-auto lg:flex md:flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 mb-px text-red-100 hover:text-green-800 text-2xl font-bold cursive tracking-widest"
          >
            David <br /> Abou 
            <span className="text-xs block"> Web Developer</span>
          </NavLink>
          {/* <NavLink
            to="/post"
            activeClassName="text-red-800 bg-green-100"
            className="inline-flex items-center py-3 px-3 my-8 rounded text-red-100 hover:text-green-400"
          >
            Blog Posts
          </NavLink> */}
          <NavLink
            to="/project"
            activeClassName="text-red-800 bg-green-100"
            className="inline-flex items-center py-3 px-3 my-8 rounded text-red-100 hover:text-green-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-800 bg-green-100"
            className="inline-flex items-center py-3 px-3 my-8 rounded text-red-100 hover:text-green-400"
          >
            About Me
          </NavLink>
         
        </nav>
          <div className="inline-flex py-3 px-3 lg:my-6 md:my-6 " >
            <SocialIcon url="https://www.linkedin.com/in/david-abou-5b8972163/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
            <SocialIcon url="https://github.com/davidabu91" className="mr-4 border-ahite" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100000777557012" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
            <a href={file} download><img src="https://img.icons8.com/ios/50/000000/open-resume.png" alt="" className="mr-4 bg-white rounded-3xl" target="_blank"  fgColor="#fff" style={{height:35, width:35}}/></a>
        </div>
      </div>
   
    </header>
  );
}
