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
import PoisedImg from '../../public/poised.png'
import TripPlannerImg from '../../public/trip-planner.png'
import SupermemeImg from '../../public/supermeme.png'
import AlteredImg from '../../public/altered.png'
import MemImg from '../../public/mem.png'
import LalalImg from '../../public/lalal.png'
import DurableImg from '../../public/durable.png'
import QuillbotImg from '../../public/quillbot.png'
import ElevenlabsImg from '../../public/elevenlabs.png'
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
      name: "Durable",
      caption: "Build a website in 30 seconds",
      image: DurableImg,
      link: "https://durable.co/",
      category: "productive"
    },
    {
      name: "Altered",
      caption: "Augment Your Voice.",
      image: AlteredImg,
      link: "https://www.altered.ai/",
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
      name: "Mem",
      caption: "Self-organizing workspace using AI",
      image: MemImg,
      link: "https://get.mem.ai/",
      category: "productive"
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
      name: "Trip Planner",
      caption: "Plan your trip using AI. ",
      image: TripPlannerImg,
      link: "https://www.buildai.space/app/dae3da25-888e-448f-b15c-5a20ca4ca961",
      category: "productive"
    },
    {
      name: "Eleven Labs",
      caption: "Text to Voice",
      image: ElevenlabsImg,
      link: "https://beta.elevenlabs.io/",
      category: "productive"
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
      name: "Supermeme",
      caption: "Create memes with the power of AI.",
      image: SupermemeImg,
      link: "https://www.supermeme.ai/",
      category: "creative"
    },
    {
      name: "Poised",
      caption: "Your AI communication coach.",
      image: PoisedImg,
      link: "https://www.poised.com/",
      category: "productive"
    },
    {
      name: "Lalal",
      caption: "Seperate audio tracks using AI. ",
      image: LalalImg,
      link: "https://www.lalal.ai/",
      category: "productive"
    },
    {
      name: "Anime AI",
      caption: "Anime AI generator.",
      image: AnimeAIImg,
      link: "https://www.zmo.ai/ai-anime-generator/",
      category: "creative"
    },
    {
      name: "Quillbot",
      caption: "AI-powered paraphrasing tool.",
      image: QuillbotImg,
      link: "https://quillbot.com/",
      category: "productive"
    },
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
