// src/pages/Home.jsx
import useHomeLogic from "../hooks/useHomeLogic";
import QuestListSection from "../components/QuestListSection";
import QuestionSection from "../components/QuestionSection";
import NPCDialogue from "../components/NPCDialogue";
import RandomEventModal from "../components/RandomEventModal";

const Home = () => {
  const {
    avatar,
    currentQuestion,
    currentQuests,
    isQuestListVisible,
    toggleQuestList,
    newStory,
    acquiredItem,
    currentNPC,
    currentEvent,
    handleSelect,
    handleEventSelect,
    completeQuest,
    navigateToSummary,
    setCurrentNPC,
    setCurrentEvent,
  } = useHomeLogic();

  return (
    <div className="home-container">
      {/* Main Section */}
      <div className="main-section">
        <QuestionSection
          avatar={avatar} // avatar prop 전달
          currentQuestion={currentQuestion}
          onSelect={handleSelect}
          newStory={newStory}
          acquiredItem={acquiredItem}
          navigateToSummary={navigateToSummary}
        />
      </div>

      {/* Quest List Section */}
      {isQuestListVisible && (
        <QuestListSection
          quests={currentQuests}
          toggle={toggleQuestList}
          onComplete={completeQuest}
        />
      )}

      {/* NPC Dialogue */}
      {currentNPC && (
        <NPCDialogue npc={currentNPC} onClose={() => setCurrentNPC(null)} />
      )}

      {/* Random Event Modal */}
      {currentEvent && (
        <RandomEventModal
          event={currentEvent}
          onSelect={handleEventSelect}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </div>
  );
};

export default Home;