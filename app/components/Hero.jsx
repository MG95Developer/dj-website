import Image from 'next/image'
import HeroImage from '../../public/deborah-de-luca-avatar.jpeg'
import Typed from './Typed'
import Store from './Store'

const Hero = () =>
{
    return (
        <div className='flex flex-col md:flex-row justify-center items-center overflow-hidden'>
            <div className='w-full relative'>

                <Image src={HeroImage} alt="deborah's avatar" width={2000} height={1000} priority />

                <div className='bg-slate-900 absolute w-full h-full top-0 left-0 opacity-50'>{/* dark overlay */}</div>

                <div className='text-white text-2xl p-5 absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-x-hidden'>
                    <div className='flex flex-col md:flex-row justify-around items-center w-full md:w-[60%] pt-[25%]'>
                        <Typed />
                    </div>
                </div>

                <div className='fixed top-0 left-0 bg-ddl-yellow w-full h-10 flex justify-end items-center px-5 z-10'>
                    <Store />
                </div>

            </div>
        </div>
    )
}

export default Hero