import Image from "next/image";
import { AiToolsCard } from "./page";
import Link from "next/link";
import Section from "./Animate";
import { Inter,Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Card(props: AiToolsCard) {



    return (
        <Section translate="translateY(10px)" duration={((props.index * 0.25   ) + 0.5).toString() + "s"}>
            <div className="project-card transition-all" >
                <Link href={props.link} target="_blank" >

                    {/* Image */}
                    <div className="grid place-items-center rounded-md">
                        <Image src={props.image} alt="" className="rounded-md" width={700} height={500} />
                    </div>

                    {/* Name + Links */}
                    <div className="w-full
                            md:flex md:justify-between md:mb-1">
                        <h4 className={`my-2 text-white text-lg tracking-wide font-txt font-medium ${montserrat.className}`}>
                            {props.name}
                        </h4>
                    </div>


                    {/* Tagline */}
                    <p className={`font-txt text-white mb-3 tracking-wide ${montserrat.className}`}>
                        {props.caption}
                    </p>

                </Link>
            </div>
        </Section>
    )
}