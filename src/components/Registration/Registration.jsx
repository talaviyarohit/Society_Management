import { useEffect, useState } from 'react'
import { EyeIcon, EyeOffIcon, ChevronDown } from 'lucide-react'
import regImg from "../../assets/image/1.png"
// import '../../assets/css/registration/registration.css'
import '../../assets/css/login/login.css'
import { Registration, Society } from '../../apis/api'
import { useNavigate } from 'react-router-dom';
import Societypopup from './Society'




export default function RegistrationForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSociety, setSelectedSociety] = useState('');
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [society, setSociety] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    country: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    societyId: selectedSociety ? selectedSociety.id : '',
  });

  useEffect(() => {
    const fetchSociety = async () => {
      let society = [];
      let data = await Society();
      data.forEach(v => {
        var value = {
          id: v._id,
          name: v.name
        }
        society.push(value);
      });
      setSociety(society);
    };
    fetchSociety();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.societyId === '' && selectedSociety !== '') {
      formData.societyId = selectedSociety.id;
    } else if (formData.societyId === '' && selectedSociety === '') {
      alert("Please select a society");
      return;
    }
    formData.name = `${formData.firstName} ${formData.lastName}`;
    formData.role = "admin";
    delete formData.firstName;
    delete formData.lastName;

    let data = await Registration(formData);
    if (data.status === 1) {
      alert(data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        country: '',
        state: '',
        city: '',
        password: '',
        confirmPassword: '',
        societyId: '',
      });
      setSelectedSociety('');
      navigate('/');
    } else {
      alert(data.message);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const togglePopup = () => {
    setIsOpenDrop(!isOpenDrop);
  };

  const handleSelect = (society) => {
    setSelectedSociety(society);
    setIsOpen(false);
  };

  const handleCreateSociety = () => {
    console.log("Create new society");
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Left side */}
        <div className="  flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 left-50 bg-gray-200">
          <div className="  justify-center ">


            <div className='mt-20'>
              <h2 className="text-3xl font-bold text-gray-900 "><span className='dash'>Dash</span>Stack</h2>
            </div>
            <div className='flex justify-center mt-20'>
              <img src={regImg} alt="Isometric illustration" className="max-w-md" />
            </div>



          </div>

        </div>

        {/* Right side */}
        <div className=" w-1/2 bg-white p-10 right-side pt-20 login-background1 flex justify-center ">

          <div className=' flex justify-center'>

            <form className="space-y-5 flex flex-col justify-center p-12 bg-white w-2/3" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-semibold mb-6">Registration</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                  <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country*</label>
                  <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State*</label>
                  <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF5733] focus:border-[#FF5733]" required />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="society" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Society*
                </label>
                <div className="relative">
                  <div
                    className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onClick={toggleDropdown}
                  >
                    <span className="block truncate">{selectedSociety.name || 'Select a society'}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                      <div className="max-h-48 overflow-y-auto custom-scrollbar">
                        <ul className="py-1">
                          {society.map((society) => (
                            <li
                              key={society.id}
                              className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                              onClick={() => handleSelect(society)}
                            >
                              {society.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sticky bottom-0 bg-white p-2">
                        <button
                          type='button'
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 text-white font-semibold py-2 px-4 rounded"
                          onClick={togglePopup}
                        >
                          Create Society
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                <label htmlFor="terms" className="ml-1 block text-sm text-gray-900">
                  I agree to all the Terms and <span className="text-[#FF5733]">Privacy Policies</span>
                </label>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#FF5733] to-[#FFC300] hover:from-[#FF5733] hover:to-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5733]">
                  Register
                </button>
              </div>
              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account? <a href="#" className="font-medium text-[#FF5733] hover:text-[#FF8C00]">Login</a>
              </p>
            </form>
          </div>
          <div>

          </div>
        </div>
      </div>

      {/* <Societypopup isOpen={isOpenDrop} togglePopup={togglePopup} /> */}


      {isOpenDrop && (
        <div style={popupStyle} >
          <div className='rounded-md'>
            <div className="flex  items-center  bg-gray-100 rounded-lg">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 ">Create New Society</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Society Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Society Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter Address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        Zip Code<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Zip Code"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button type="button" onClick={togglePopup} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
                      Cancel
                    </button>
                    <button type="submit" className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-indigo-700">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};
const popupContentStyle = {
  padding: '20px',
  borderRadius: '5px',

};