import Link from 'next/link'

const Store = () =>
{
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className='mr-8 font-extrabold text-ddl-purple hover:text-ddl-pink cursor-pointer'>
                <Link href="https://solamente.store/" target="_blank">Official Merchandise - Solamente Store</Link>
            </div>
        </div>
    )
}

export default Store