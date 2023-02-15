// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AiToolsDetails } from '@/app/aiList'
import { app } from '../../../firebase/config'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function fetchData(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  try{
    const db = getFirestore(app)
    const docRef = collection(db,"ai_list")
    const q = query(docRef)
  
    const data: any = await getDocs(q)
    let aiList: AiToolsDetails[] = []
    await data.docs.map((data: any,index: number)=>{
      aiList.push(data._document.data.value.mapValue.fields)
    })
  
    return res.json({aiList: aiList})

  }catch(err){
    return res.json({ aiList: err });
  }
  
}
