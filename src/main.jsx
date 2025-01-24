import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/styles.css'
import './styles/avatar.css'
import './styles/summary.css'
import './styles/question.css'
import './styles/story.css'
import './styles/timeline.css'
import './styles/items.css'
import './styles/npcs.css'
import './styles/random.css'
import './styles/quests.css'
import './styles/reward.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
