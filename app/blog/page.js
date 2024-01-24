'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import hospital from '../../public/slider_img/hospital1.png';
import profile_picture from '../../public/slider_img/profile_picture.png';

import blog1 from '../../public/slider_img/blog1.jpg';
import blog2 from '../../public/slider_img/blog2.jpg';
import Link from "next/link";
import Navbar from "../components/Navbar";

function Page() {
  const blog = [{
    id: 1,
    catagory: 'React',
    author: 'Robiul Hoque',
    designation: 'admin, Web developer',
    date: '01/01/2024',
    img: [blog1, blog2],
    title: 'Your most unhappy customers are your greatest source of learning.',
    keyPoint: ['Noting', 'somthing'],
    des: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Aldus PageMaker including versions of Lorem Ipsum']
  }, {
    id: 1,
    catagory: 'React',
    author: 'Robiul Hoque',
    designation: 'admin, Web developer',
    date: '01/01/2024',
    img: [blog2, blog1],
    title: 'Your most unhappy customers are your greatest source of learning.',
    keyPoint: ['Noting', 'somthing'],
    des: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Aldus PageMaker including versions of Lorem Ipsum']
  }, {
    id: 1,
    catagory: 'React',
    author: 'Robiul Hoque',
    designation: 'admin, Web developer',
    date: '01/01/2024',
    img: [blog1, blog2],
    title: 'Your most unhappy customers are your greatest source of learning.',
    keyPoint: ['Noting', 'somthing'],
    des: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Ildus PageMaker including versions of Lorem Ipsum']
  }, {
    id: 1,
    catagory: 'React',
    author: 'Robiul Hoque',
    designation: 'admin, Web developer',
    date: '01/01/2024',
    img: [blog2, blog1],
    title: 'Your most unhappy customers are your greatest source of learning.',
    keyPoint: ['Noting', 'somthing'],
    des: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Aldus PageMaker including versions of Lorem Ipsum']
  },]
  const aniString = 'WELCOME';
  const [aniWord, setAniword] = useState('');
  let i = 0;

  function typingAnimation() {
    if (i <= aniString.length) {
      setAniword((prevAniWord) => prevAniWord + aniString.charAt(i));
      i++;
    }
    if (i == aniString.length) {
      setAniword('W');
      i = 0;
    }
  }

  useEffect(() => {
    const typingInterval = setInterval(typingAnimation, 500);
    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full">
     <Navbar />
      {/* Blog post page heading start */}
      {/* <div className="w-full h-[45rem] border-l-8 bg-blog-bg bg-cover  border-black py-36 my-6 flex items-center">
        <div>
        <h1 className="md:text-9xl text-7xl text-white pl-6 font-serif">{aniWord}<span className="text-blue-700"></span></h1>
        <h1 className=" text-white pl-6 pt-5 text-3xl">Explore <span className="font-serif text-red-500 font-bold underline">Rakib's</span> digital knowledge world.</h1>
        <p className="pl-6 pt-6 font-serif tracking-wider text-2xl text-gray-300">I love to document my knowledge and share it with others.</p>
        </div>
        
      </div> */}
      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 md:mx-10 lg:mx-[7rem] sm:mx-12 mx-6">
        {
          blog.map(item => <div className="">
            <p className="mb-3 font-bold">{item.catagory}—<span className="text-gray-600">{item.date}</span></p>
            <Image width={500} height={300} className="my-5" alt="img" src={item.img[0]} style={{ objectFit: "contain", borderRadius: '5%' }} />
            <Link className="text-blue-500 hover:underline" href='https://facebook.com' target="blank"><h2 className="my-3">{item.title}</h2></Link>
            <p className="text-gray-600 text-justify">{item.des[0]}</p>
            <div className="flex my-4 items-center">
              <Image width={50} height={500} alt="img" style={{ borderRadius: '50%' }} src={profile_picture} />
              <div className="ml-4 leading-4">
                <h6 className="font-bold">{item.author}</h6>
                <p className="text-gray-600 text-sm">{item.designation}r</p>
              </div>
            </div>
          </div>)
        }

      </div>

    </div>
  )
}
export default Page;
