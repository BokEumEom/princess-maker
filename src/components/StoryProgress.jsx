import React from "react";

const StoryProgress = ({ storyProgress }) => (
  <div className="story-progress">
    <h3>스토리 진행</h3>
    <ul>
      {storyProgress.map((event, index) => (
        <li
          key={index}
          className={`story-event ${
            index === storyProgress.length - 1 ? "highlight" : ""
          }`}
        >
          {event.text}
        </li>
      ))}
    </ul>
  </div>
);

export default StoryProgress;
