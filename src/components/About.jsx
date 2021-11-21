import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from '@sanity/image-url';
import BlockContetnt from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relayive bg-yellow-400 bg-opacity-90">
      <div className="p-10  container mx-auto relative">
        <section className="">
          <div className="flex flex-row">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-24 h-24 lg:w-32 lg:h-32 mr-8"
            alt={author.name}
          />
          <h1 className="cursive lg:text-6xl text-4xl text-red-500 mb-4">
              Hey there. I'm{" "}
              <span className="text-red-600 text-center">{author.name}</span>
              <br /><span className="text-2xl lg:text-4xl">Front End Web Developer</span> 
            </h1>
            </div>
          <div className="text-lg flex flex-col justify-center">

            <div className="prose lg:prose-xl text-black font-mono">
              <BlockContetnt
                blocks={author.bio}
                projectId="0em3ra9r"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
