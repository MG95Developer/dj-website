import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


const Controls = ( props ) =>
{
    return (
        <div className='flex justify-center items-center mb-12'>
            <button className='text-ddl-pink' onClick={() => props.SkipSong( false )}>
                <FontAwesomeIcon icon={faBackward} />
            </button>

            <button className='bg-ddl-yellow p-3 border-none outline-none mx-4 rounded-full cursor-pointer' onClick={() => props.setIsPlaying( !props.isPlaying )}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>

            <button className='text-ddl-pink' onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls