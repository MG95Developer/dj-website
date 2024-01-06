import Link from 'next/link'

const Footer = () =>
{
    return (
        <footer className="bg-ddl-yellow py-5 px-10">

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 font-bold uppercase text-center'>

                <div className="flex flex-col text-ddl-purple">
                    <Link href="https://deborahdeluca.it/" target="_blank" className='py-3 hover:text-ddl-pink'>
                        <p>Official Website</p>
                    </Link>

                    <Link href="https://solamente.store/" target="_blank" className='py-3 hover:text-ddl-pink'>
                        <p>Merchandising</p>
                    </Link>
                </div>

                <div className='flex flex-col'>
                    <Link href="https://www.youtube.com/watch?v=qygPYJtXt0U&feature=youtu.be" target="_blank" className='py-3 hover:text-ddl-purple'>
                        <p> Promo Album “SHE SLEEPS” 21.08.20</p>
                    </Link>

                    <Link href="https://www.youtube.com/watch?v=RQLoZKaCQfA&feature=youtu.be" target="_blank" className='py-3 hover:text-ddl-purple'>
                        <p> live set @ Le Vele (Scampia, Naples)</p>
                    </Link>

                </div>

                <div className='flex flex-col text-ddl-pink'>
                    <Link href="https://www.facebook.com/deborahdelucadj" target="_blank" className='py-3 hover:text-ddl-purple'>
                        <p>facebook</p>
                    </Link>

                    <Link href="https://www.instagram.com/deborahdeluca/?hl=en" target="_blank" className='py-3 hover:text-ddl-purple'>
                        <p>Instagram</p>
                    </Link>

                    <Link href="https://www.tiktok.com/discover/DEBORAH-DE-LUCA?lang=en" target="_blank" className='py-3 hover:text-ddl-purple'>
                        <p>TikTok</p>
                    </Link>
                </div>

            </div>

        </footer>
    )
}

export default Footer