import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Predict from "./components/Predict";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound"; // Import NotFound component
import AlgorithmPerformanceChart from "./components/Performance";
import AccuracyVsEpochChart from "./components/AccuracyVsEpochChart";
import ConfusionMatrixChart from "./components/ConfusionMatrixChart";
import Augmentation from "./components/Augmentation";
// import { AppSidebar } from "./components/AppSidebar";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/predict" element={<Predict />} />

          <Route path="/performance-metrics" element={<Sidebar />}>
            <Route path="performance" element={<AlgorithmPerformanceChart />} />
            <Route path="comparision" element={<AccuracyVsEpochChart />} />
            <Route path="confusion" element={<ConfusionMatrixChart />} />
            <Route path="augmentation" element={<Augmentation />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
