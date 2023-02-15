"use client"
import Image from "next/image";
import { AiToolsCard } from "./page";
import Link from "next/link";
import Section from "./Animate";
import { Inter, Montserrat } from "@next/font/google";
import { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import TestImg from '../../public/chatgpt.png'
import Skeleton, {
    SkeletonTheme,
    SkeletonThemeProps,
} from "react-loading-skeleton-2";

const montserrat = Montserrat({ subsets: ['latin'] })

function Tilt(props: any) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        if (tilt.current) {
            VanillaTilt.init(tilt.current, options);
        }
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

export default function CardSkeleton() {


    const options = {
        scale: 1.02,
        speed: 300,
        max: 10,
        easing: "cubic-bezier(0.99)",
        transition: true,
        glare: false
    };

    const skeletonLoadingStyles: SkeletonThemeProps = {
        color: "#202020",
        highlightColor: "#444",
    };


    return (
        <Tilt options={options}>

            <div className="project-card" >

                <div className="w-full  rounded-md">
                    {/* <Image src={TestImg} alt="" className="rounded-md" width={700} height={500} /> */}
                    <Skeleton height={175}  className="mt-2" />
                </div>

                <Skeleton height='20px' className="mt-2" />

                <Skeleton height='20px' className="mt-2" />



            </div>
        </Tilt>
    )
}
