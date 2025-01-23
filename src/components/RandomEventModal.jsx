const RandomEventModal = ({ event, onSelect, onClose }) => {
  if (!event) return null;

  return (
    <div className="random-event-overlay">
      <div className="random-event-modal">
        <h3>{event.name}</h3>
        <img src={event.image} alt={event.name} className="event-image" />
        <p>{event.description}</p>
        <div className="event-options">
          {event.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(option)}
              className="event-option-btn"
            >
              {option.text}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="close-btn">
          닫기
        </button>
      </div>
    </div>
  );
};

export default RandomEventModal;