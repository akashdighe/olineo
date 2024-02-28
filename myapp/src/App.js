import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import OtpVerification from './components/OtpVerification';  // Import your SuccessComponent

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/success" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
