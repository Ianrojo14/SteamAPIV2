import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileData = ({ steamId, customUrl }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://steamcommunity.com/profiles/${steamId}/?xml=1`
        );
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [steamId]);

  return (
    <div>
      <h2>Profile Data</h2>
      {profileData ? (
        <pre>{JSON.stringify(profileData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileData;