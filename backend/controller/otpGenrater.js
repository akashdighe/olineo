import otpGenerator from 'otp-generator'

const otpGenrater=()=>{
    const OTP = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets :false });
    return OTP
}

export default otpGenrater
