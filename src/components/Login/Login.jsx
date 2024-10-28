
import React from 'react';
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import login from '../../assets/image/login.png'
import '../../assets/css/login/login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setIsFormValid(value.trim() !== '' && formData.email.trim() !== '');
    };

    return (
        <div className="flex min-h-screen bg-gray-50 relative">
            {/* Left side */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 left-50 bg-gray-200">
                <div className=" w-full max-w-sm lg:w-96 dashstack">
                    <div className=" mb-24">
                        <h2 className="text-3xl font-bold text-gray-900"><span className='dash'>Dash</span>Stack</h2>
                    </div>
                    <div className="relative mb-8 image">
                        <img src={login} alt="Society Management Illustration" className="w-full" />

                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 pt-20 right-side">
                <div className="mx-auto  lg:w-96 login-background">
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                    </div>
                    <h2 className="text-3xl font-bold mb-6">Login</h2>
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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password*
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${showError ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="text-red-500 text-sm mt-1 hidden">Incorrect Password.</div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/forget-password" className="font-medium text-orange-600 hover:text-orange-500">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r bg-gray-400"
                                style={{ backgroundColor: isFormValid ? '#FE512E' : 'gray' }}
                                disabled={!isFormValid}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/registration" className="font-medium text-orange-600 hover:text-orange-500">
                            Registration
                        </Link>
                    </p>
                </div>
            </div>
            <div className="absolute top-0 right-1/2 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100/20 to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
        </div>
    );
}
