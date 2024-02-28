import React, { useState } from 'react';


const OtpVerification = () => {
  const [otp, setOtp] = useState('');


  const handleVerify = () => {
    // Add logic for verifying OTP here
    // You may want to make an API call to your server to validate the entered OTP
    console.log('Verifying OTP:', otp);
  };

  return (
    <div className="otp-verification-container">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your email:</p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OtpVerification;
