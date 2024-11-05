import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { login } from '../../apis/api'
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/image/login.png';
import '../../assets/css/login/login.css';

export default function Login() {
    const navigate = useNavigate();
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
        setIsFormValid(formData.email.trim() !== '' && formData.password.trim() !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData); // Call the login API
            navigate('/dashboard'); // Redirect on successful login
        } catch (error) {
            console.error('Login failed:', error);
            setShowError(true); // Show error message if login fails
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 relative">
            {/* Left Side */}
            <div className="hidden lg:flex flex-1 flex-col justify-center px-8 sm:px-10 lg:px-20 xl:px-24 bg-gray-200 z-index">
            <h1 className="text-3xl font-bold block text-gray-900 fixed" style={{top:'55px', left: '95px', fontSize:'50px'}}><span className='dash'>Dash</span>Stack</h1>
                <div>
                    <img src={loginImage} alt="Society Management Illustration" className="w-full object-cover" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 lg:pt-20 z-index">
                <div className="mx-auto w-full max-w-md lg:max-w-lg login-background p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Login</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                        {showError && (
                            <div className="text-red-500 text-sm mt-1">
                                Incorrect Password.
                            </div>
                        )}

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
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${isFormValid ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
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

            {/* Background Gradient Decorations */}
            <div style={{ top: '-81px' }} className="fixed right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block right-side"></div>
        </div>
    );
}
