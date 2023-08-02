import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masuk from "./pages/Masuk";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/masuk" element={<Masuk />} />
            </Routes>
          </Router>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
