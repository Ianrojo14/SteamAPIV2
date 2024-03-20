import React, { useState } from 'react';
import ProfileData from './components/ProfileData';
import GameStats from './components/GameStats';

const App = () => {
  const [steamId, setSteamId] = useState('76561197960435530');
  const [customUrl, setCustomUrl] = useState('');
  const [gameId, setGameId] = useState('L4D');

  return (
    <div>
      <h1>Steam Community Data</h1>
      <div>
        <label htmlFor="steamId">Steam ID:</label>
        <input
          type="text"
          id="steamId"
          value={steamId}
          onChange={(e) => setSteamId(e.target.value)}
        />
        <label htmlFor="customUrl">Custom URL:</label>
        <input
          type="text"
          id="customUrl"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        />
        <label htmlFor="gameId">Game ID:</label>
        <input
          type="text"
          id="gameId"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
      </div>
      <ProfileData steamId={steamId} customUrl={customUrl} />
      <GameStats steamId={steamId} customUrl={customUrl} gameId={gameId} />
    </div>
  );
};

export default App;