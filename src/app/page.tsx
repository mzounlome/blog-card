import Image from "next/image";
import BlogImage from "./components/BlogImage";
export default function Home() {
  return (
    <div className="bg-yellow-400 flex justify-center items-center  w-full min-h-screen">
      <BlogImage />
    </div>
  );
}
