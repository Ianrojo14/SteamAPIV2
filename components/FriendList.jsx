import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.steamid}>
            {friend.personaname} ({friend.steamid})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;