import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import login from '../../assets/image/forget.png';
import '../../assets/css/login/login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setIsFormValid(value.trim() !== '' && formData.email.trim() !== '');
    };

    const handleClick = () => {
        navigate('/otppage');
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
                        <img src={login} alt="Password Reset Illustration" className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full mx-auto" />
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12 lg:py-20">
                <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 rounded-lg shadow-md relative">
                    <h2 className="text-3xl font-bold mb-6 text-center">Forget Password</h2>
                    <h5 className="text-sm mb-4 text-center">
                        Enter your email address, and we’ll send you a link to reset your password.
                    </h5>
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        setShowError(true);
                    }}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email or Phone*
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                placeholder="+91 92019 32452"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <button
                                onClick={handleClick}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                                style={{ backgroundColor: isFormValid ? '#FE512E' : 'gray' }}
                                disabled={!isFormValid}
                            >
                                Get OTP
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        <Link to={'/'} className="font-medium text-orange-600 hover:text-orange-500">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-1/2 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100/20 to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
        </div>
    );
}
