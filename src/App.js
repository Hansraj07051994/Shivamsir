import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './cmp/homepage/index.jsx';
import Tna from './cmp/tna_form/index.jsx';
import Extra from './cmp/extrapage/index.jsx';
import Pagenotfound from './cmp/page_not_found/index.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Tna />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
