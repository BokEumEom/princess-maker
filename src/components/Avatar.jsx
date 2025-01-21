import React from "react";

const Avatar = ({ avatar }) => {
  if (!avatar) return <div>Loading...</div>;

  const { stats } = avatar;
  const avatarImage = `/assets/images/princess01.png`;

  return (
    <div
      className="avatar-container"
      style={{
        backgroundImage: `url(${avatarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="avatar-stats">
        <p>Charm: {stats.charm}</p>
        <p>Health: {stats.health}</p>
        <p>Intelligence: {stats.intelligence}</p>
      </div>
    </div>
  );
};

export default Avatar;
