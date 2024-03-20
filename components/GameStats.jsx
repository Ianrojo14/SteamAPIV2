import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameStats = ({ steamId, customUrl, gameId }) => {
  const [gameStats, setGameStats] = useState(null);

  useEffect(() => {
    const fetchGameStats = async () => {
      try {
        const response = await axios.get(
          `http://steamcommunity.com/profiles/${steamId}/stats/${gameId}/?xml=1`
        );
        setGameStats(response.data);
      } catch (error) {
        console.error('Error fetching game stats:', error);
      }
    };

    fetchGameStats();
  }, [steamId, gameId]);

  return (
    <div>
      <h2>Game Stats</h2>
      {gameStats ? (
        <pre>{JSON.stringify(gameStats, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GameStats;