import React, { useContext } from 'react'
import { assets,} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {

    const {seekBar,seekBg, playStatus, play, pause, track, time ,previous, next, seekSong} = useContext(PlayerContext);
  return (
    <div className='h-[10%] flex justify-between items-center text-white px-4 bg-black'>
     <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12'  src={track.image} alt=''/>
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
     </div>
     <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-5'>
           <img className='w-4 cursor-pointer'  src={assets.shuffle_icon} alt='' />
           <img onClick = {previous} className='w-4 cursor-pointer'  src={assets.prev_icon} alt='' />
           {playStatus?<img onClick = {pause} className='w-4 cursor-pointer'  src={assets.pause_icon} alt='' />:
           <img onClick = {play} className='w-4 cursor-pointer'  src={assets.play_icon} alt='' />
           }
           <img onClick={next} className='w-4 cursor-pointer'  src={assets.next_icon} alt='' />
           <img className='w-4 cursor-pointer'  src={assets.loop_icon} alt='' />
         </div>
         <div className='flex items-center gap-5'>
            <p>{time.currentTime.second}:{time.currentTime.minute}</p>
           <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] rounded-full cursor-pointer bg-gray-300'>
        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
           </div>
           <p>{time.totalTime.minute}:{time.totalTime.second}</p>
         </div>
     </div>
     <div className='hidden lg:flex items-center gap-2 opacity-75'>
         <img className='w-5' src={assets.plays_icon} alt='' />
         <img className='w-5' src={assets.mic_icon} alt='' />
         <img className='w-5' src={assets.queue_icon} alt='' />
         <img className='w-5' src={assets.speaker_icon} alt='' />
         <img className='w-5' src={assets.volume_icon} alt='' />
         <div className='w-20 h-1 bg-slate-50 rounded'>

         </div>
         <img className='w-5' src={assets.mini_player_icon} alt='' />
         <img className='w-5' src={assets.zoom_icon} alt='' />
     </div>
    </div>
  )
}

export default Player