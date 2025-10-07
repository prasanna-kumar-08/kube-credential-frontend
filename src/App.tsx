import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IssuancePage from './pages/Issuance';
import VerificationPage from './pages/Verification';

function App() {
  return (
    <Router>
      <nav style={{ margin: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Issue Credential</Link>
        <Link to="/verify">Verify Credential</Link>
      </nav>
      <Routes>
        <Route path="/" element={<IssuancePage />} />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
