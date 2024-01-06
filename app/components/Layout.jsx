
import Image from 'next/image'
import Link from 'next/link'
import { FaSpotify, FaSoundcloud, FaYoutube, FaMusic } from 'react-icons/fa6';
import DeborahLive from '../../public/deborah-de-luca-live-concert.jpeg';
import WonderWoman from '../../public/wonder-woman-dj.webp'
import Flag from '../../public/italian-flag.png'
import MusicPlayer from './MusicPlayer';
import SlickSlider from './SlickSlider';

const Layout = () =>
{
    return (
        <main className="bg-slate-200 flex flex-col md:flex-row md:gap-2">

            <section className='w-full md:w-[30%] lg:w-[20%] h-auto'>

                <div className='bg-ddl-pink text-white p-4 h-full flex flex-col gap-y-3'>

                    <p className='hidden md:flex py-6 font-semibold'>
                        🎵 <span className='ml-2'>Listen to my music on</span>
                    </p>

                    <div className="w-full cursor-pointer py-5">
                        <Link
                            href="https://open.spotify.com/artist/144HzhpLjcR9k37w5Ico9B?si=IFC_-AokTEaMvnskwK_3xg&nd=1&dlsi=2157ccb0a0c341d6"
                            target="_blank">
                            <p className="cursor-pointer text-2xl md:text-1xl 2xl:text-3xl font-semibold flex justify-center md:justify-start items-center hover:text-ddl-yellow delay-350">
                                <span className="inline-block mr-4">
                                    <FaSpotify />
                                </span>
                                Spotify
                            </p>
                        </Link>
                    </div>

                    <div className="w-full cursor-pointer py-5">
                        <Link href="https://soundcloud.com/deborahdeluca" target="_blank">
                            <p className="cursor-pointer text-2xl md:text-1xl 2xl:text-3xl font-semibold flex justify-center md:justify-start items-center hover:text-ddl-yellow delay-350">
                                <span className="inline-block mr-4">
                                    <FaSoundcloud />
                                </span>
                                SoundCloud
                            </p>
                        </Link>
                    </div>

                    <div className="w-fullcursor-pointer py-5">
                        <Link
                            href="https://www.youtube.com/deborahdelucamusic"
                            target="_blank">
                            <p className="cursor-pointer text-2xl md:text-1xl 2xl:text-3xl font-semibold flex justify-center md:justify-start items-center hover:text-ddl-yellow delay-350">
                                <span className="inline-block mr-4">
                                    <FaYoutube />
                                </span>
                                Youtube
                            </p>
                        </Link>
                    </div>

                    <div className="w-full cursor-pointer py-5">
                        <Link
                            href="https://www.beatport.com/artist/deborah-de-luca/207637"
                            target="_blank">
                            <p className="ccursor-pointer text-2xl md:text-1xl 2xl:text-3xl font-semibold flex justify-center md:justify-start items-center hover:text-ddl-yellow delay-350">
                                <span className="inline-block mr-4">
                                    <FaMusic />
                                </span>
                                Beatport
                            </p>
                        </Link>
                    </div>

                    <div className="w-full cursor-pointer py-5">
                        <Link
                            href="https://www.beatport.com/label/solamente/31075"
                            target="_blank">
                            <p className="cursor-pointer text-2xl md:text-1xl 2xl:text-3xl font-semibold flex justify-center md:justify-start items-center hover:text-ddl-yellow delay-350">
                                <span className="inline-block mr-4">
                                    <FaMusic />
                                </span>
                                Solament Label
                            </p>
                        </Link>
                    </div>

                </div>

            </section>

            <section className='w-full md:w-[70%] lg:w-[80%]'>

                <div className='bg-purple-400 p-4 h-full'>

                    <div className='w-[50%] mx-auto flex justify-center items-center py-5'>
                        <Image
                            src={DeborahLive}
                            alt="deborah de luca italian dj"
                            width={350}
                            height={350}
                            className="rounded-full"
                        />
                    </div>

                    <div className='w-full py-5 flex flex-col lg:flex-row gap-4'>

                        <div className='w-full'>
                            <MusicPlayer />
                        </div>

                        <div className="w-full h-full flex justify-center items-center relative">

                            <div>
                                <Image
                                    src={WonderWoman}
                                    alt="deborah de luca italian dj"
                                    width={290}
                                    height={290}
                                    className="rounded-xl hidden lg:flex"
                                />
                            </div>

                            <div className='absolute text-3xl text-white font-extrabold bottom-5 justify-center items-center hidden lg:flex'>
                                <Image
                                    src={Flag}
                                    alt="deborah de luca italian dj"
                                    width={25}
                                    height={25}
                                    className="inline-block mr-3"
                                />
                                <span>Techno DJ</span>
                            </div>

                        </div>
                    </div>

                    <div className="w-full mx-auto px-5 py-10">
                        <SlickSlider />
                    </div>

                </div>

            </section>

        </main>
    )
}

export default Layout