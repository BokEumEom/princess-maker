import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SummaryPage from "./pages/SummaryPage";

const App = () => {
  const avatar = {
    stats: { charm: 18, health: 12, intelligence: 15 },
    storyProgress: [
      { id: 1, text: "당신의 매력은 모두를 사로잡았습니다." },
      { id: 2, text: "뛰어난 지능으로 왕국의 전략가로 인정받았습니다." },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<SummaryPage avatar={avatar} />} />
      </Routes>
    </Router>
  );
};

export default App;
