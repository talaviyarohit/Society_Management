import React, { useState, useEffect } from 'react';
import login from '../../assets/image/forget.png';
import '../../assets/css/login/login.css';
import { CiClock2 } from "react-icons/ci";

export default function OtpPage() {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(true);
    const isOtpComplete = otp.every(digit => digit !== '');

    useEffect(() => {
        if (isActive && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setIsActive(false);
        }
    }, [isActive, timer]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/, '');
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleResend = () => {
        setTimer(60);
        setIsActive(true);
        setOtp(Array(6).fill(''));
    };

    const handleSubmit = () => {
        alert(`OTP Submitted: ${otp.join('')}`);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 relative">
            {/* Left side */}
            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-gray-200">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900"><span className="dash">Dash</span>Stack</h2>
                    </div>
                    <div className="relative mb-8">
                        <img src={login} alt="Society Management Illustration" className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full mx-auto" />
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12 lg:py-20">
                <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Enter OTP</h2>
                    <h5 className="text-sm mb-4 text-center">
                        Please enter the 6-digit code sent to your phone number.
                    </h5>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex justify-center mb-4 space-x-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    placeholder="0"
                                    className="border border-gray-300 rounded text-center w-12 h-12 text-xl focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    maxLength="1"
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-center mb-4">
                            {isActive ? (
                                <div className="flex items-center text-gray-600">
                                    <CiClock2 className="text-lg mr-1" />
                                    <span>00:{timer < 10 ? `0${timer}` : timer} sec</span>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    className="text-red-500 rounded px-4 py-2"
                                >
                                    Resend OTP
                                </button>
                            )}
                        </div>

                        <button
                            className={`w-full py-2 rounded text-white ${isOtpComplete ? 'bg-red-500' : 'bg-gray-400 cursor-not-allowed'}`}
                            onClick={isOtpComplete ? handleSubmit : null}
                            disabled={!isOtpComplete}
                        >
                            Verify
                        </button>
                    </form>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-1/2 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100/20 to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
        </div>
    );
}
