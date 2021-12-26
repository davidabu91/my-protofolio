import React from "react";
import img from "../assets/pexels-jakub-novacek-924824.jpg";
import reactIcon from "../assets/react-icon.png";
import cssIcon from "../assets/css3.png";
import githubIcon from "../assets/github.png";
import hrokuIcon from "../assets/heroku.png";
import htmlIcon from "../assets/html5.png";
import jsIcon from "../assets/javascript.png";
import netlifyIcon from "../assets/netlify.png";
import nodeIcon from "../assets/nodejs.png";
import reduxIcon from "../assets/redux.png";
import tailwiindIcon from "../assets/tailwind.png";
import tsIcon from "../assets/typescript.png";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <img src={img} alt="" className="absolute object-cover w-full h-full" />
      <section className="relative flex flex-col  justify-center    px-8">
        <h1 className="lg:text-7xl text-4xl font-bold text-green-50 leading-none lg:leading-snug mt-5px	">
          Hello. I'm David.
        </h1>{" "}
        <br />
        <h6 className="lg:text-3xl   text-2xl text-green-50 font-bold  leading-none lg:leading-snug ">
          Operations Manager with 6+ years of experience in project management
          and process leadership. <br /> I am changing my career and looking for an
          opportunity as a <br /> <strong className="text-green-200 lg:text-4xl">FRONT END DEVELOPER.</strong> <br /> My motto: "Automate frequent
          actions and take time to create new opportunities." <br /> Team player, open
          mind and excellent communication skills. <br /> Organized, eager to learn new
          things, loves to explore and solve problems.
        </h6>
        <div className="bg-white opacity-30 mt-4 mb-4 p-4 rounded-xl">
          <div className="flex flex-row  justify-center ">
            <img src={reactIcon} alt="" className="w-1/12 ml-8" />
            <img src={cssIcon} alt="" className="w-1/12 ml-8" />
            <img src={htmlIcon} alt="" className="w-1/12 ml-8" />
            <img src={jsIcon} alt="" className="w-1/12 ml-8" />
            <img src={tsIcon} alt="" className="w-1/12 ml-8" />
            <img src={nodeIcon} alt="" className="w-1/12 ml-8" />
          </div>
          <div className="flex flex-row  justify-center mt-8">
            <img src={githubIcon} alt="" className="w-1/12 ml-8" />
            <img src={reduxIcon} alt="" className="w-1/12 ml-8" />
            <img src={tailwiindIcon} alt="" className="w-1/12 ml-8" />
            <img src={hrokuIcon} alt="" className="w-1/12 ml-8" />
            <img src={netlifyIcon} alt="" className="w-1/12 ml-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
