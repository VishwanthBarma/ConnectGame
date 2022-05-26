import { useState, useMemo } from 'react';
import { PlayerContext } from '../components/PlayerContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [player, setPlayer] = useState(1);
  function changeTurn(){
    player == 1 ? setPlayer(2) : setPlayer(1);
  }

  return(
    <PlayerContext.Provider value={{player, changeTurn}}>
      <Component {...pageProps} />
    </PlayerContext.Provider>
  )
}

export default MyApp
