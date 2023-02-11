"use client"
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from './page.module.css'
import Card from './Card'
import ChatGPTImg from '../../public/chatgpt.png'
import CopyAiImg from '../../public/copyai.png'
import MidjourneyImg from '../../public/midjourney.png'
import TomeImg from '../../public/tome.png'
import SoundrawImg from '../../public/soundraw.png'
import KaiberImg from '../../public/kaiber.png'
import FlikiImg from '../../public/fliki.png'
import FirefliesImg from '../../public/fireflies.png'
import AnimeAIImg from '../../public/animeai.png'
import RunwayImg from '../../public/runway.png'
import NamelixImg from '../../public/namelix.png'
import LookaImg from '../../public/looka.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['500','300','800'], })

export type AiToolsDetails = {
  name: string,
  caption: string,
  image: any,
  link: string,
  category: "general" | "productive" | "creative"
}

export interface AiToolsCard extends AiToolsDetails {
  index: number
}

export default function Home() {

  const aiTools: AiToolsDetails[] = [
    {
      name: "ChatGPT",
      caption: "Do anything you want !!!",
      image: ChatGPTImg,
      link: "https://chat.openai.com/",
      category: "general"
    },
    {
      name: "Copy.ai",
      caption: "Generate content using AI.",
      image: CopyAiImg,
      link: "https://www.copy.ai/",
      category: "productive"
    },
    {
      name: "Midjourney",
      caption: "Create amazing art using AI.",
      image: MidjourneyImg,
      link: "https://midjourney.com/",
      category: "creative"
    },
    {
      name: "Runway",
      caption: "Edit videos using AI.",
      image: RunwayImg,
      link: "https://runwayml.com/",
      category: "creative"
    },
    {
      name: "Soundraw",
      caption: "An AI music generator.",
      image: SoundrawImg,
      link: "https://soundraw.io/",
      category: "creative"
    },
    {
      name: "Tome",
      caption: "Create PPTs in no time.",
      image: TomeImg,
      link: "https://beta.tome.app/",
      category: "productive"
    },
    {
      name: "Looka",
      caption: "Create logos in minutes.",
      image: LookaImg,
      link: "https://looka.com/",
      category: "creative"
    },
    {
      name: "Namelix",
      caption: "Generate names for your buisness.",
      image: NamelixImg,
      link: "https://namelix.com/",
      category: "productive"
    },
    {
      name: "Kaiber",
      caption: "Create videos using AI.",
      image: KaiberImg,
      link: "https://www.kaiber.ai/",
      category: "creative"
    },
    {
      name: "Fliki",
      caption: "Create reels using AI.",
      image: FlikiImg,
      link: "https://fliki.ai/",
      category: "creative"
    },
    {
      name: "Fireflies",
      caption: "Automate your meeting notes.",
      image: FirefliesImg,
      link: "https://fireflies.ai/",
      category: "productive"
    },
    {
      name: "Anime AI",
      caption: "Anime AI generator.",
      image: AnimeAIImg,
      link: "https://www.zmo.ai/ai-anime-generator/",
      category: "creative"
    }
  ]

  return (
    <div className='p-2 flex flex-col items-center'>

      <h1 className={`header text-2xl font-normal mt-8 mb-6 leading-[1.5]  ${poppins.className}
                      md:text-4xl md:mt-12 md:mb-10
                      xl:text-6xl xl:leading-[1.5]`}  >
        Unleash the Power of AI <br/>With These Cutting-Edge Tools
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
          <div className='w-full gap-4 grid grid-cols-1 max-w-7xl
                      md:grid-cols-2 
                      lg:grid-cols-3'>
            {
              aiTools.map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="creative">
        <div className='w-full gap-4 grid grid-cols-1 max-w-7xl
                      md:grid-cols-2 
                      lg:grid-cols-3'>
            {
              aiTools.filter(item=>item.category=="creative").map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="productive">
        <div className='w-full gap-4 grid grid-cols-1 max-w-7xl
                      md:grid-cols-2 
                      lg:grid-cols-3'>
            {
              aiTools.filter(item=>item.category=="productive").map((data: AiToolsDetails, index: number) => (
                <Card
                  name={data.name}
                  link={data.link}
                  caption={data.caption}
                  image={data.image}
                  category={data.category}
                  index={index}
                  key={index}
                />
              ))
            }
          </div>
        </TabsContent>
      </Tabs>


      <Footer/>
    </div>
  )
}
