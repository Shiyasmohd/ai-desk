import Image from 'next/image'
import Logo from '../../public/icons/logo.png'

export default function Navbar() {
    return (
        <div className="w-full p-2 mt-4">
            <div className='w-full max-w-[1600px] mx-auto'>
                <Image src={Logo} alt="AI Desk" width={150} />
            </div>
        </div>
    )
}