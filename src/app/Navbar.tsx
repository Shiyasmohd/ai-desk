import Image from 'next/image'
import Logo from '../../public/icons/logo.png'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app,firebaseConfig } from '../../firebase/config';
import { aiTools, AiToolsDetails } from './aiList';
import QuillbotImg from '../../public/quillbot.png'
import { useRef, useState } from 'react';


export default function Navbar() {

    return (
        <div className="w-full p-2 mt-4">
            <div className='w-full max-w-[1600px] mx-auto'>
                <Image src={Logo} alt="AI Desk" width={150} />
            </div>
        </div>
    )
}