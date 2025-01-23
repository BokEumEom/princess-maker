const NPCDialogue = ({ npc, onClose }) => {
  if (!npc) return null;

  return (
    <div className="npc-dialogue-overlay">
      <div className="npc-dialogue">
        <img src={npc.image} alt={npc.name} className="npc-image" />
        <h3>{npc.name}</h3>
        <p>{npc.dialogue}</p>
        <button onClick={onClose} className="close-btn">
          닫기
        </button>
      </div>
    </div>
  );
};

export default NPCDialogue;