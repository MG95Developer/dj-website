"use client"

import ReactTyped from 'react-typed-component'
import Image from 'next/image'
import Link from 'next/link'
import DDL from '../../public/deborah-de-luca-italian-dj.jpeg'

const Typed = () =>
{
    return (
        <div className='w-full flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-[80%]'>
                <div className='text-1xl lg:text-2xl xl:text-6xl text-ddl-blue'>
                    <ReactTyped strings={["Nella musica elettronica credo e faccio a modo mio..."]} typeSpeed={30} />
                </div>

                <div className='text-2xl lg:text-4xl lg:mt-8 text-white'>
                    <ReactTyped
                        strings={[
                            "Enjoy...",
                            "Feel free...",
                            "Remember...",
                            "Be happy...",

                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" className='bg-transparent' />
                    </ReactTyped>
                </div>
            </div>

            <div className='hidden lg:flex w-full md:w-[20%] justify-end md:justify-center md:items-center cursor-pointer'>
                <Link href='https://deborahdeluca.it/' target='_blank'>
                    <Image
                        src={DDL}
                        alt="deborah de luca italian dj"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-ddl-yellow border-solid"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Typed