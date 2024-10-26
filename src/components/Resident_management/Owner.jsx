import React, { useState } from 'react'
import { Bell, ChevronDown, Container, LogOut, Upload } from 'lucide-react'
import owner from '../../assets/image/owner.jpg'
import { UploadIcon } from './UploadIcon';


const Owner = () => {
    const [fileNames, setFileNames] = useState(Array(4).fill(""));

    const handleFileChange = (e, index) => {
      const file = e.target.files[0];
      if (file) {
        const updatedFileNames = [...fileNames];
        updatedFileNames[index] = file.name;
        setFileNames(updatedFileNames);
      }
    };
  
    const handleClickUpload = (index) => {
      document.getElementById(`fileInput-${index}`).click();
    };
    return (

        <>
            <container className="container">
                <div className="flex min-h-screen bg-gray-100">

                    {/* Main content */}
                    <main className="flex-1 p-8">


                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex mb-4">
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-tl-md rounded-bl-md">Owner</button>
                                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-tr-md rounded-br-md">Tenant</button>
                            </div>

                            <div className='flex w-full m-0'>
                                <div>
                                    <img src={owner} alt="" />
                                </div>
                                <div className="w-full">
                                    <form className="w-full">
                                        <div className="flex  gap-6">
                                            <div className='w-1/3'>
                                                <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                            <div className='w-1/3'>
                                                <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                                                <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                            <div className='w-1/3'>
                                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-4 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Age*</label>
                                                <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Gender*</label>
                                                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Wing*</label>
                                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Unit*</label>
                                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                            </div>
                                        </div>



                                    </form>
                                </div>

                            </div>
                            {/* <div>
            <div className="grid grid-cols-4 gap-6">
                {['Upload Aadhar Card (Front Side)', 'Upload Aadhar Card (Back Side)', 'Address Proof (Vero Bill OR Light Bill)', 'Rent Agreement'].map((title) => (
                    <div key={title} className="border border-dashed border-gray-300 rounded-md p-4">
                        <div className="text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-1 text-sm text-gray-600">{title}</p>
                            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        <input type="file" className="hidden" />
                    </div>
                ))}
            </div>
        </div> */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        "Upload Aadhar Card (Front Side)",
                                        "Upload Aadhar Card (Back Side)",
                                        "Address Proof (Vero Bill OR Light Bill)",
                                        "Rent Agreement",
                                    ].map((title, index) => (
                                        <div
                                            key={title}
                                            className="border border-dashed border-gray-300 rounded-md p-4 cursor-pointer"
                                            onClick={() => handleClickUpload(index)}
                                        >
                                            <div className="text-center">
                                                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                                <p className="mt-1 text-sm text-gray-600">{title}</p>
                                                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                {fileNames[index] && (
                                                    <p className="mt-2 text-xs text-gray-700 truncate">
                                                        {fileNames[index]}
                                                    </p>
                                                )}
                                            </div>
                                            <input
                                                id={`fileInput-${index}`}
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileChange(e, index)}
                                                accept=".png, .jpg, .jpeg, .gif"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end space-x-4">
                                    <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </container>
        </>
    )
}

export default Owner;