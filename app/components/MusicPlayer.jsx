"use client"

import { useState, useEffect } from 'react';
import Player from './Player';

/*
    - Create the songs array (useState)
    - Set current song / next song (useState)
    - Update current song (useEffect)
    - Build the Player component that will be used inside the UI & pass the variables to this component
*/


const MusicPlayer = () =>
{

    const [songs] = useState( [
        {
            title: "Brunch Electronik Málaga 2023",
            artist: "Deborah de Luca",
            src: "./music/malaga-brunch.mp3"
        },
        {
            title: "DORI ME @ LE VELE (Scampia)",
            artist: "Deborah de Luca",
            src: "./music/DORI ME_ @ LE VELE .mp3"
        },
        {
            title: "Château de Chambord",
            artist: "Deborah de Luca",
            src: "./music/ Château de Chambord in France for Cercle.mp3"
        },
    ] )

    const [currentSongIndex, setCurrentSongIndex] = useState( 0 )
    const [nextSongIndex, setNextSongIndex] = useState( 0 )

    /*
        index 0 : music 1 - Brunch 
        index 1 : music 2 - DORI ME
        index 2 : music 3 - Château
    */

    useEffect( () =>
    {
        setNextSongIndex( () =>
        {
            if ( currentSongIndex + 1 > songs.length - 1 ) // formula
            //  ( index 0 + 1 ) = 1   >  ( 3 - 1 ) = 2   ===  more songs exist, continue
            //  ( index 1 + 1 ) = 2   >  ( 3 - 1 ) = 2   ===  more songs exist, continue
            //  ( index 2 + 1 ) = 3   >  ( 3 - 1 ) = 2   ===  return to 0 (1st music listed)
            {
                return 0;
            } else
            {
                return currentSongIndex + 1;
            }
        } );
    }, [currentSongIndex, songs.length] );

    return (
        <div className='w-full'>
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    )
}

export default MusicPlayer