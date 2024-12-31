import React from "react";
import Menu from '../shared/menu';
import 'react-toastify/dist/ReactToastify.css';

const Order: React.FC = () => {

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[800px] mx-auto px-4 my-32 select-none outline-none">
                <h1 className="text-3xl font-bold text-center mb-5 text-blue-600">Order Information</h1>

                <form className="bg-white border-2 border-blue-200 shadow-lg rounded-lg p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input type="text" id="fullName" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your full name" disabled/>
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                            <input type="number" id="phone" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your phone number" required/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your email" required/>
                        </div>
                        
                        <div>
                            <label htmlFor="method" className="block text-gray-700 font-medium mb-2">Payment Method</label>
                            <select id="method" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                <option value="cod">Cash on Delivery (COD)</option>
                                <option value="credit">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                        <input type="text" id="address" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your address" required/>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-t pt-4">
                            <span className="text-gray-700 font-medium">TOTAL:</span>
                            <span className="font-semibold text-xl text-blue-700">120.00<span>$</span></span>
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md w-full hover:bg-blue-600 transition-colors duration-300">
                        Order Now
                    </button>
                </form>
            </section>

        </div>
    );
}

export default Order;