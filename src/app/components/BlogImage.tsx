"use client";
import Image from "next/image";
import { FC } from "react";
import blogPic from "./images/illustration-article.svg";
import profile from "./images/image-avatar.webp";
interface BlogImageProps {}

const BlogImage: FC<BlogImageProps> = () => {
  return (
    <div className="w-10/12 h-fit rounded-xl p-3 bg-white border-black border-t-2 border-l-2 border-b-8 border-r-8 flex flex-col items-center desktop:w-3/12 tablet:w-8/12 justify-evenly">
      <div className="h-64 rounded-xl w-11/12 relative">
        <Image src={blogPic} alt="blog" objectFit="container" layout="fill" />
      </div>
      <div className="h-72 mt-5  flex flex-col  justify-evenly  w-11/12">
        <div className="bg-yellow-400 h-8 rounded-md w-20 flex justify-center items-center">
          <h3 className="text-sm  font-bold">Learning</h3>
        </div>
        <p className="text-gray-500 font-bold text-xs">Published 21 Dec 2023</p>
        <h1 className="text-lg font-bold">HTML & CSS Foundations</h1>
        <p className="text-gray-500 text-sm pr-5">
          These languages are the backbone of every website, defining structure
          content ans presenatation.
        </p>
        <div className="h-12 w-2/3  flex px-1 items-center">
          <div className="h-10 w-10 rounded-full bg-blue-600 relative">
            <Image
              src={profile}
              alt="profile"
              objectFit="container"
              layout="fill"
            />
          </div>
          <h2 className="font-bold ml-6">Greg Cooper</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogImage;
