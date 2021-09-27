import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import bgabout from "../bgabout.jpg";
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
    <main className="relayive ">
      <img src={bgabout} alt="Family" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-24 h-24 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive lg:text-6xl text-4xl text-green-300 mb-4">
              Hey ther. I'm{" "}
              <span className="text-green-800">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-wwhite">
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
