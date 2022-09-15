import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
