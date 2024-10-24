import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import regImg from "../../assets/image/1.png"

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col p-12">
        <h1 className="text-4xl font-bold text-[#FF5733]">DashStack</h1>
        <div className="flex-grow flex items-center justify-center">
          <img src={regImg} alt="Isometric illustration" className="max-w-md" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Connect, Collaborate, and Control - <span className="text-[#FF5733]">Society</span></h2>
          <h2 className="text-2xl font-semibold"><span className="text-[#FF5733]">Management</span> Simplified.</h2>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 bg-white p-12">
        <h2 className="text-3xl font-semibold mb-6">Registration</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
              <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
              <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country*</label>
              <input type="text" id="country" name="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State*</label>
              <input type="text" id="state" name="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
              <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
            </div>
          </div>
          <div>
            <label htmlFor="society" className="block text-sm font-medium text-gray-700">Select Society*</label>
            <select id="society" name="society" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required>
              <option value="">Select a society</option>
              <option value="shantigram">Shantigram residency</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]"
                required
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password*</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-[#FF5733] focus:ring-[#FF5733] border-gray-300 rounded" required />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to all the Terms and <span className="text-[#FF5733]">Privacy Policies</span>
            </label>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#FF5733] to-[#FFC300] hover:from-[#FF5733] hover:to-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5733]">
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="#" className="font-medium text-[#FF5733] hover:text-[#FF8C00]">Login</a>
        </p>
      </div>
    </div>
  )
}