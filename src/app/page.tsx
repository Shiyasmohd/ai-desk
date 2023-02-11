"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
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

const inter = Inter({ subsets: ['latin'] })

export type AiToolsDetails = {
  name: string,
  caption: string,
  image: any,
  link: string,
}

export interface AiToolsCard extends AiToolsDetails{
  index: number
}

export default function Home() {

  const aiTools: AiToolsDetails[] = [
    {
      name: "ChatGPT",
      caption: "Do anything you want !!!",
      image: ChatGPTImg,
      link: "https://chat.openai.com/"
    },
    {
      name: "Copy.ai",
      caption: "Generate content using AI.",
      image: CopyAiImg,
      link: "https://www.copy.ai/"
    },
    {
      name: "Midjourney",
      caption: "Create amazing art using AI.",
      image: MidjourneyImg,
      link: "https://midjourney.com/"
    },
    {
      name: "Runway",
      caption: "Edit videos using AI.",
      image: RunwayImg,
      link: "https://runwayml.com/"
    },
    {
      name: "Soundraw",
      caption: "An AI music generator.",
      image: SoundrawImg,
      link: "https://soundraw.io/"
    },
    {
      name: "Tome",
      caption: "Create PPTs in no time.",
      image: TomeImg,
      link: "https://beta.tome.app/"
    },
    {
      name: "Kaiber",
      caption: "Create videos using AI.",
      image: KaiberImg,
      link: "https://www.kaiber.ai/"
    },
    {
      name: "Fliki",
      caption: "Create reels using AI.",
      image: FlikiImg,
      link: "https://fliki.ai/"
    },
    {
      name: "Fireflies",
      caption: "Automate your meeting notes.",
      image: FirefliesImg,
      link: "https://fireflies.ai/"
    },
    {
      name: "Anime AI",
      caption: "Anime AI generator.",
      image: AnimeAIImg,
      link: "https://www.zmo.ai/ai-anime-generator/"
    }
  ]

  return (
    <div className='p-6 flex flex-col items-center'>

      <h1 className='header text-6xl my-6'>
        AI Tools
      </h1>

      <div className='w-full gap-4 grid grid-cols-1 max-w-7xl
                      md:grid-cols-2 
                      lg:grid-cols-3'>
        {
          aiTools.map((data: AiToolsDetails, index: number)=>(
            <Card
              name={data.name}
              link={data.link}
              caption={data.caption}
              image={data.image}
              index={index}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}
