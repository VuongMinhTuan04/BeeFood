import React, { useEffect, useRef, useState } from "react";
import { ClipboardDocumentListIcon, HomeIcon, ShoppingBagIcon, UsersIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {

    {/* Dropdown Menu */}
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-blue-400 h-[90px] shadow-[0_4px_8px_rgba(169,169,169,1)] fixed top-0 z-10 w-full select-none outline-none">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div>
                    <img src="/logo.png" className="rounded-full object-cover" width={100} height={100}/>
                </div>

                <div className="flex-grow mx-24 flex justify-center">
                    <form className="form flex items-center w-full max-w-2xl space-x-2" action="/">
                        <button className="flex-shrink-0">
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>

                        <input type="text" className="input flex-grow" placeholder="What food are you looking for?" required />

                        <button className="reset flex-shrink-0" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                </div>

                <div className="space-x-12 flex items-center font-bold mr-24">
                    <div className="relative flex justify-center items-center space-x-2 cursor-pointer">
                        <NavLink to="/" className="text-white transition-colors flex items-center">
                            <HomeIcon className="h-7 w-7"/>
                        </NavLink>
                    </div>

                    <div className="relative flex justify-center items-center space-x-2 cursor-pointer">
                        <NavLink to="/cart" className="text-white transition-colors flex items-center">
                            <ShoppingBagIcon className="h-7 w-7"/>

                            <div className="absolute top-[-4px] right-[-10px] flex justify-center items-center w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full">
                                3
                            </div>
                        </NavLink>  
                    </div>

                    <div className="relative flex justify-center items-center space-x-2 cursor-pointer">
                        <NavLink to="/order-detail" className="text-white transition-colors flex items-center">
                            <ClipboardDocumentListIcon className="h-7 w-7"/>
                        </NavLink>
                    </div>

                    <div className="relative flex justify-center items-center space-x-2 cursor-pointer">
                        <div className="text-white transition-colors flex items-center" onClick={toggleDropdown}>
                            <UsersIcon className="h-7 w-7 mr-2" />
                        </div>

                        <div ref={dropdownRef} className={`absolute top-12 bg-blue-400 text-white rounded-2xl shadow-lg p-2 w-56 z-50 transition-all duration-300 origin-top ${
                                            isDropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"  }`} style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}>
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="#food-management" className="block px-4 py-2 transform transition-transform duration-300 hover:translate-x-2 rounded">Food Management</NavLink>
                                </li>

                                <li>
                                    <NavLink to="#order-management" className="block px-4 py-2 transform transition-transform duration-300 hover:translate-x-2 rounded">Order Management</NavLink>
                                </li>

                                <li>
                                    <NavLink to="#user-management" className="block px-4 py-2 transform transition-transform duration-300 hover:translate-x-2 rounded">User Management</NavLink>
                                </li>

                                <li>
                                    <NavLink to="#dashboard" className="block px-4 py-2 transform transition-transform duration-300 hover:translate-x-2 rounded">Dashboard</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <NavLink to="/sign-in">
                        <img src="https://via.placeholder.com/100" className="rounded-full w-12 h-12 object-cover"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Menu;