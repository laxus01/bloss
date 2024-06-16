import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ContentMain } from "./pages/home/contentMain";
import { Details } from "./pages/home/details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentMain />}>
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
