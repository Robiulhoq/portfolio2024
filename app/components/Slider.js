"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import profile_picture from '../../public/slider_img/profile_picture.png';
import blog1 from '../../public/slider_img/blog1.jpg';
import blog2 from '../../public/slider_img/blog2.jpg';
// import "./TrendingSlider.css";
import Image from "next/image";

const Slider = () => {
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
        img: [blog2, blog1],
        title: 'Your most unhappy customers are your greatest source of learning.',
        keyPoint: ['Noting', 'somthing'],
        des: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Aldus PageMaker including versions of Lorem Ipsum']
    },]
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 455;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 455;
    };
    return (
        <>
        <h1 className="text-center font-bold my-5">My recent posts</h1>
            <div className="">
                <div className="w-full flex flex-col justify-center">
                    <div className="my-4">
                        <button className="bg-gray-200 p-3 rounded mr-4 hover:bg-gray-600" title="scroll left" onClick={slideLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>

                        </button>
                        <button className="bg-gray-200 p-3 rounded hover:bg-gray-600" title="scroll right" onClick={slideRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                    <div id="slider" className=" relative flex gap-10 overflow-x-hidden overflow-y-hidden scroll-smooth">
                        {
                            blog.map(item => <div className="min-w-[26rem]">
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
            </div>
        </>
    );
};
export default Slider;