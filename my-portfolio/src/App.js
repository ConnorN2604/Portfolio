import React from "react";
import { Card, CardContent } from './components/ui/card'; 
import { Separator } from './components/ui/separator'; // Correct the path to ./ui/separator
import { ArrowUpRight } from "lucide-react";
import CurrentPortfolio from "./components/CurrentPortfolio"; // Correct the import path for CurrentPortfolio

const App = () => {
  return (
    <div className="app">
      <CurrentPortfolio /> {/* Render CurrentPortfolio */}
    </div>
  );
};

export default App;
