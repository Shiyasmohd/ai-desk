import { Montserrat } from "@next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'] })


export default function Footer(){
    return(
        <div className={`w-full text-center text-xs mt-4 text-white ${montserrat.className} `}>
            Made with ❤️ by <Link href="https://twitter.com/0xshiyasmohd"> Shiyas </Link>
        </div>
    )
}