import { useState } from 'react'
import { BarChart3, Home, DollarSign, FileText, Bell, ShieldCheck, Users, LogOut } from 'lucide-react'

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-white w-64 min-h-screen flex flex-col ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <div className="p-4 bg-orange-800 text-white text-2xl font-bold">DashStack</div>
                <nav className="flex-grow    p-5">
                    <a href="#" className="block py-2 px-4 text-white bg-orange-500 hover:bg-orange-700 flex items-center">
                        <Home className="mr-2" /> Dashboard
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 flex items-center">
                        <Users className="mr-2" /> Resident Management
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 flex items-center">
                        <DollarSign className="mr-2" /> Financial Management
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 flex items-center">
                        <FileText className="mr-2" /> Facility Management
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 flex items-center">
                        <Bell className="mr-2" /> Complaint Tracking
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 flex items-center">
                        <ShieldCheck className="mr-2" /> Security Management
                    </a>
                </nav>
                <div className="p-4">
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

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
                            <p className="text-2xl font-bold">₹ 2,22,520</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Total Income</h3>
                            <p className="text-2xl font-bold">₹ 55,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Total Expense</h3>
                            <p className="text-2xl font-bold">₹ 20,550</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Total Unit</h3>
                            <p className="text-2xl font-bold">₹ 20,550</p>
                        </div>
                    </div>

                    {/* Chart and Important Numbers */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <div className=" bg-white p-5 rounded-lg shadow ">
                            <h3 className="text-lg font-semibold mb-4">Total Balance</h3>
                            <div className="h-64 flex items-center justify-center">
                                <BarChart3 className="w-full h-full text-blue-500" />
                            </div>
                        </div>
                        <div className="bg-white p-4  rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Important Numbers</h3> <span><button type='button' className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-700">Add</button></span>

                            {/* Add your important numbers content here */}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Pending Maintenance</h3>
                            {/* Add your important numbers content here */}
                        </div>
                    </div>

                    {/* Complaint List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow mb-8">
                            <h3 className="text-lg font-semibold mb-4">Complaint List</h3>
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left">Complainer Name</th>
                                        <th className="text-left">Complaint Name</th>
                                        <th className="text-left">Date</th>
                                        <th className="text-left">Priority</th>
                                        <th className="text-left">Complaint Status</th>
                                        <th className="text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Add your complaint list items here */}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-4">Upcoming Activity</h3>
                            {/* Add your upcoming activity content here */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}