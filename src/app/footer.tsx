import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import Github from '../../public/icons/github.svg'
import Twitter from '../../public/icons/twitter.svg'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function Footer() {
    return (
        <div className={`w-full max-w-7xl border-slate-600 py-4 mx-auto border-t flex justify-between items-center text-xs mt-4 text-white ${montserrat.className} `}>
            <div className="">
                © 2023 Shiyas Mohammed
            </div>
            <div className="flex justify-end gap-4">
                <Link href="https://github.com/shiyasmohd/tools-ai" target="_blank" className="opacity-50 hover:opacity-75">
                    <Image src={Github} alt="Github" width={25} height={25} />
                </Link>
                <Link href="https://twitter.com/0xshiyasmohd" target="_blank" className="opacity-50 hover:opacity-75">
                    <Image src={Twitter} alt="Github" width={25} height={25} />
                </Link>
            </div>
        </div>
    )
}