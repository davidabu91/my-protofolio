import React from "react";
import image from '../bgimg.jpg';

export default function Home() {
  return (
    <main>
        <img src={image} alt="" className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="lg:text-9xl text-7xl font-bold text-green-50 leading-none lg:leading-snug ">Hello. I'm David.</h1>
        </section>
    </main>
  );
}
//  text-4xl text-green-50  lg:font-bold cursive leading-none lg:leading-snug home-name