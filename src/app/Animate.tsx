import { useInView } from "framer-motion";
import { useRef } from "react";

type SectionProps ={
    children: any,
    translate: string,
    duration: string
}

export default function Section(props: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "none" : `${props.translate}`,
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${props.duration}`
          }}
        >
          {props.children}
        </div>
      </section>
    );
  }