import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from '@sanity/image-url';
import BlockContetnt from "@sanity/block-content-to-react";
import { NavLink } from "react-router-dom";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": auther->name,
      "autherImage": auther->image,
    }`
      )
      .then((data) => {
        setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loding...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container ahdow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4 text-center">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800 ">
                {/* <img
                  // src={singlePost.mainImage.asset.url}
                  src={singlePost.autherImage && urlFor(singlePost.autherImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 ronded-full"
                /> */}
                {/* <p className="cursive flex items-center pl-2 text-2xl ">
                  {singlePost.name}
                </p> */}
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t h-48"
            // style={{ height: "400px" }}
          />
        </header>
        <div className="px-2 lg:px-48 py-12 lg:py-20 prose lg:porse-xl max-w-full text-r" style={{"direction": "rtl"}} >
          <BlockContetnt
            blocks={singlePost.body}
            projectId="0em3ra9r"
            dataset="production"
            
          />

<NavLink
            to="/post"
            activeClassName="text-red-800 bg-green-100"
            className="inline-flex items-center  rounded text-red-100 hover:text-green-800 "
          >
            לעוד פוסטים
          </NavLink>
        </div>
      
      </article>
    </main>
  );
}
