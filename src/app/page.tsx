"use client"
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from './page.module.css'
import Card from './Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import Footer from './footer'
import { aiTools, AiToolsDetails } from './aiList'
import Navbar from './Navbar'
import Section from './Animate'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardSkeleton from './CardSkeleton'
import Skeleton from 'react-loading-skeleton-2';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '300', '800'], })

export interface AiToolsCard extends AiToolsDetails {
  index: number
}

export default function Home() {

  const [aiListArr,setAiListArr] = useState<AiToolsDetails[]>([])
  const skeleton = [1,1,1,1,1,1]


  const fetchAiList = async() =>{
    let response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchData`)
    setAiListArr(response.data.aiList)
    console.log(response.data.aiList);
  }

  useEffect(()=>{
    fetchAiList()
  },[])

  return (
    <div className='p-2 flex flex-col items-center'>

      <div className='w-full overflow-hidden'>
        <Section duration='0.1s' translate='translateX(100px)' >
          <Navbar />
        </Section>
      </div>

      <h1 className={`header text-2xl font-normal mt-8 mb-6 leading-[1.5]  ${poppins.className}
                      md:text-4xl md:mt-12 md:mb-10
                      xl:text-6xl xl:leading-[1.5]`}  >
        Unleash the Power of AI <br />With These Cutting-Edge Tools
      </h1>

      <Tabs defaultValue="all">
        <div className='w-full flex justify-center'>
          <TabsList >
            <TabsTrigger value="all" className={`text-xs font-light ${poppins.className}`}>All</TabsTrigger>
            <TabsTrigger value="creative" className={`text-xs font-light ${poppins.className}`}>Creative</TabsTrigger>
            <TabsTrigger value="productive" className={`text-xs font-light ${poppins.className}`}>Productive</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className='w-full'>
          <div className={`w-full gap-4 grid grid-cols-1 max-w-7xl ${aiListArr.length > 0 ? "p-6" : "mt-6"}
                      md:grid-cols-2 
                      lg:grid-cols-3`}>
            {
              aiListArr.length > 0 ?
              aiListArr.map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              )) : 
              skeleton.map((data,index)=>(
                <CardSkeleton key={index}/>
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="creative">
          <div className={`w-full gap-4 grid grid-cols-1 max-w-7xl ${aiListArr.length > 0 ? "p-6" : "mt-6"}
                      md:grid-cols-2 
                      lg:grid-cols-3`}>
            {
              aiListArr.length > 0 ?
              aiListArr.filter(item => item.category.stringValue == "creative").map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              )) : 
              skeleton.map((data,index)=>(
                <CardSkeleton key={index}/>
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="productive">
          
          <div className={`w-full gap-4 grid grid-cols-1 max-w-7xl ${aiListArr.length > 0 ? "p-6" : "mt-6"}
                      md:grid-cols-2 
                      lg:grid-cols-3`}>
            {
              aiListArr.length > 0 ?
              aiListArr.filter(item => item.category.stringValue == "productive").map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              )) : 
              skeleton.map((data,index)=>(
                <CardSkeleton key={index}/>
              ))
            }
          </div>
        </TabsContent>
      </Tabs>

      <Footer />

    </div>
  )
}
