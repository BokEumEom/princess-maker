import React from "react";

const StoryProgress = ({ storyProgress }) => (
  <div className="story-progress">
    <h3 className="progress-title">스토리 진행</h3>
    <ul className="timeline">
      {storyProgress.map((event, index) => (
        <li
          key={index}
          className={`timeline-item ${
            index === storyProgress.length - 1 ? "highlight" : ""
          }`}
        >
          <div className="timeline-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="timeline-content">
            <p>{event.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default StoryProgress;
