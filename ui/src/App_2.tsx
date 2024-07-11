import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Player from 'video.js/dist/types/player';
import VideoPlayer from './components/video/VideoPlayer';

export function VideoComponent() {
  const [count, setCount] = useState(0)
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://localhost:8080/ipfs/QmSRtfAGepo2eCcu9gCtkFw2TSU6v4R897o3oxQ6b8NYKh?',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player:Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div className='w-full'>
      <video controls>
        <source src='http://bafybeieirxjq2hw2u57l322q7kjkd4bsya64w6b2pisrzygzmaankbgdbq.ipfs.localhost:8080' type='video/mp4' />
      </video>
    </div>
  )
}
