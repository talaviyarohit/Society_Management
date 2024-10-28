import { useState } from 'react'
import { BarChart3, LayoutDashboard, DollarSign, FileText, Mail , Shield, Banknote , LogOut,Siren,Megaphone } from 'lucide-react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-white w-64 h-screen flex flex-col ${isMenuOpen ? 'block' : 'hidden'} md:block border border-black`}>
                <div className="p-6 text-center text-2xl font-bold"><p className=' pb-4 text-center text-2xl font-bold' style={{borderBottom:"1px solid",borderColor:"#F4F4F4"}}><span className='dash'>Dash</span>Stack</p></div>
                <nav className="flex-grow p-2">
                    <Link to="/Dashboard/DashboardDetail" className="block py-2 px-4 rounded-lg text-white bg-orange-500 hover:bg-orange-700 flex items-center">
                        <LayoutDashboard className="mr-2" /> Dashboard
                    </Link>
                    <Link href="#" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200 flex items-center">
                        <Banknote className="mr-2" /> Resident Management
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <DollarSign className="mr-2" /> Financial Management
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <FileText className="mr-2" /> Facility Management
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <Mail  className="mr-2" /> Complaint Tracking
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <Shield className="mr-2" /> Security Management
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <Siren className="mr-2" /> Security Guard
                    </Link>
                    <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
                        <Megaphone className="mr-2" /> Announcement
                    </Link>
                </nav>
                <div className="p-4 border border-black">
                    <button className="flex items-center text-red-500 hover:bg-gray-200 hover:text-red-700">
                        <LogOut className="mr-2" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white shadow-md p-4 flex justify-between items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex-1 px-4">
                        <input type="text" placeholder="Search Here" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="flex items-center">
                        <img src="/placeholder.svg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                        <span>Moni Roy</span>
                    </div>
                </header>

               <Outlet/>
            </div>
        </div>
    )
}