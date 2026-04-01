import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { StoryPage } from './components/pages/StoryPage';
import { NutritionistPage } from './components/pages/NutritionistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/nutritionist" element={<NutritionistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
