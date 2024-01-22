'use client';
import React from 'react';
import Image from 'next/image';

import { Carousel } from "@material-tailwind/react";

function ImgSlider(props) {
    return (
        <Carousel transition={{ duration: 2 }} className="rounded-xl">
            <Image
                src={props.img1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <Image
                src={props.img2}
                alt="image 2"
                className="h-full w-full object-cover"
            />

        </Carousel>
    );
}

export default ImgSlider;