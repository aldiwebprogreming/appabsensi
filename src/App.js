import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Masuk from "./pages/Masuk";
import Login from "./pages/Login";
import Keluar from "./pages/Keluar";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />}></Route>
              <Route path="/masuk" element={<Masuk />} />
              <Route path="/keluar" element={<Keluar />} />
            </Routes>
          </Router>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
