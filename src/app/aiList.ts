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
import VanceImg from '../../public/vance.png'
import UizardImg from '../../public/uizard.png'
import KhromaImg from '../../public/khroma.png'
import FrontyImg from '../../public/fronty.png'
import ResumeAIImg from '../../public/resumeai.png'

export type AiToolsDetails = {
    name: string,
    caption: string,
    image: any,
    link: string,
    category: "general" | "productive" | "creative"
}

export const aiTools: AiToolsDetails[] = [
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
    {
        name: "Resume AI",
        caption: "Next generation intelligent resume builder.",
        image: ResumeAIImg,
        link: "https://www.resumai.com/",
        category: "productive"
    },
    {
        name: "Vance AI",
        caption: "Image editing and manipulation.",
        image: VanceImg,
        link: "https://vanceai.com/",
        category: "productive"
    },
    {
        name: "Uizard",
        caption: "Design stunning designs in minutes",
        image: UizardImg,
        link: "https://uizard.io/",
        category: "productive"
    },
    {
        name: "Khroma",
        caption: "Creates limitless palettes",
        image: KhromaImg,
        link: "https://www.khroma.co/",
        category: "productive"
    },
    {
        name: "Fronty",
        caption: "Image to HTML CSS converter",
        image: FrontyImg,
        link: "https://fronty.com/",
        category: "productive"
    },
]