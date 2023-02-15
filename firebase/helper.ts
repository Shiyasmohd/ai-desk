import { aiTools, AiToolsDetails } from "@/app/aiList";
import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { app } from "./config";

const addData = async() =>{
    const db = getFirestore(app)
    
    const collectionRef = collection(db,"ai_list")
    
    aiTools.map(async(data:AiToolsDetails,index:number)=>{

        await addDoc(collectionRef, {
            name: data.name,
            caption: data.caption,
            image: "",
            link: data.link,
            category: data.category
          })
    })
}

const fetchData = async() =>{
    const db = getFirestore(app)
    const docRef = collection(db,"ai_list")
    const q = query(docRef)

    const data: any = await getDocs(q)
    console.log(data.docs[0]._document.data.value.mapValue.fields);
}