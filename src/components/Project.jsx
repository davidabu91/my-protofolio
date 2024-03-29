import React, { useState, useEffect } from "react";
import sanityclient from "../client.js";
import { SocialIcon } from "react-social-icons";



export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityclient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          githubLink,
          projectType,
          link,
          tags,
          "projectImage": image.asset->url

    }`
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcom to my projects page
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article key={index} className="relative rounded-lg shadow-xl bg-white p-5 ">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <img
                    src={project.projectImage}
                    className="rounded w-24 h-24 lg:w-32 lg:h-32 mr-8"
                    alt={project.name}
                  />
                <div className="text-gray-500 text-xs   ">
                  {/* <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <br />
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <br />
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span> */}
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View the Project{" "}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                 
                  <SocialIcon
                    url={project.githubLink}
                    className="ml-5 mb-2"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 30, width: 30 }}
                  />
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
