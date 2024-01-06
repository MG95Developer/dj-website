import React from 'react'

/*
- Let us know the song's name & the artist's name.
*/

const Details = ( props ) =>
{
    return (
        <div className='mx-4 mt-4'>
            <h3 className='text-1xl text-ddl-white py-2 mb-4 font-extrabold'>
                {props.song.title}
            </h3>

            <h4 className='text-1xl py-3 text-ddl-pink font-semibold'>
                {props.song.artist}
            </h4>
        </div>
    )
}

export default Details