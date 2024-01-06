"use client"

import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import Details from './Details';

const Player = ( props ) =>
{
    const audioElement = useRef( null )
    const [isPlaying, setIsPlaying] = useState( false )

    // PLAY / PAUSE BUTTONS
    useEffect( () =>
    {
        if ( isPlaying )
        {
            audioElement.current.play();
        } else
        {
            audioElement.current.pause();
        }
    } );

    // SKIP SONG
    const SkipSong = ( forwards = true ) =>
    {
        if ( forwards )
        {
            props.setCurrentSongIndex( () =>
            {
                let track = props.currentSongIndex;
                track++;

                if ( track > props.songs.length - 1 )
                {
                    track = 0;
                }

                return track;
            } );
        } else
        {
            props.setCurrentSongIndex( () =>
            {
                let track = props.currentSongIndex;
                track--;

                if ( track < 0 )
                {
                    track = props.songs.length - 1;
                }

                return track;
            } );
        }
    }

    return (
        <div className='music-player bg-ddl-purple roundex-xl p-5 lg:p-3 text-center h-[400px] md:h-[450px] w-[80%] mx-auto'>

            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>

            <div className='flex flex-col justify-between py-4'>

                <div className='mb-12 md:text-2xl lg:text-1xl'>
                    <Details song={props.songs[props.currentSongIndex]} />
                </div>

                <div className='mt-2 py-2'>
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                </div>

                <div className='py-2'>
                    <p className='text-ddl-yellow xl:text-1xl'>Next: <span>{props.songs[props.nextSongIndex].title}</span></p>
                </div>

            </div>

        </div>
    )
}

export default Player