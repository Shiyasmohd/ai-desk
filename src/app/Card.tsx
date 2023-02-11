import Image from "next/image";
import { AiToolsCard } from "./page";
import Link from "next/link";
import Section from "./Animate";

export default function Card(props: AiToolsCard) {

    return (
        <Section translate="translateY(10px)" duration={((props.index * 0.075   ) + 0.5).toString() + "s"}>
            <div className="project-card border transition-all" >
                <Link href={props.link} target="_blank" >

                    {/* Image */}
                    <div className="grid place-items-center rounded-md">
                        <Image src={props.image} alt="" className="rounded-md" width={700} height={500} />
                    </div>

                    {/* Name + Links */}
                    <div className="w-full
                            md:flex md:justify-between md:mb-3">
                        <h4 className="my-2 text-white text-lg tracking-wide font-txt font-medium">
                            {props.name}
                        </h4>
                    </div>


                    {/* Tagline */}
                    <p className="font-txt text-white mb-3 tracking-wide">
                        {props.caption}
                    </p>

                </Link>
            </div>
        </Section>
    )
}