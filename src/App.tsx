import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Predict from "./components/Predict";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound"; // Import NotFound component

const App: React.FC = () => {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
