import React from "react";
import Menu from '../shared/menu';
import '../order/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const OrderDetail: React.FC = () => {
    const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        toast.success("Cancelled Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    };

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[800px] mx-auto px-4 my-32 select-none outline-none">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Order Details</h2>

                <div className="border rounded-lg shadow-xl p-6 bg-white mb-10">
                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-blue-100 text-blue-700 text-center align-middle">
                                <th className="border px-4 py-3">Image</th>
                                <th className="border px-4 py-3">Name</th>
                                <th className="border px-4 py-3">Price</th>
                                <th className="border px-4 py-3">Quantity</th>
                                <th className="border px-4 py-3">Total</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700">
                            <tr className="hover:bg-gray-50 text-center">
                                <td className="border px-4 py-3">
                                    <div className="flex justify-center items-center">
                                        <img src="https://via.placeholder.com/100" className="w-20 h-20 object-cover rounded-lg shadow-sm" />
                                    </div>
                                </td>
                                <td className="border px-4 py-3">Product Name</td>
                                <td className="border px-4 py-3">50<span>$</span></td>
                                <td className="border px-4 py-3 w-10">3</td>
                                <td className="border px-4 py-3">150<span>$</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b pb-3">Customer Information</h3>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Full Name:</span>
                                <span className="text-gray-600">John Doe</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Phone:</span>
                                <span className="text-gray-600">+1 234 567 890</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Address:</span>
                                <span className="text-gray-600">123 Main St, Springfield</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Payment Method:</span>
                                <span className="text-gray-600 font-bold">Cash</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Status:</span>
                                <span className="text-green-600 font-bold">Success</span>
                            </div>
                        </div>
                    </div>

                    <form method="post" className="text-right">
                        <button className="bg-red-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onClick={handleCancel}>
                            Cancel Order
                        </button>
                    </form>
                </div>

                <div className="border rounded-lg shadow-xl p-6 bg-white mb-10">
                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-blue-100 text-blue-700 text-center align-middle">
                                <th className="border px-4 py-3">Image</th>
                                <th className="border px-4 py-3">Name</th>
                                <th className="border px-4 py-3">Price</th>
                                <th className="border px-4 py-3">Quantity</th>
                                <th className="border px-4 py-3">Total</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700">
                            <tr className="hover:bg-gray-50 text-center">
                                <td className="border px-4 py-3">
                                    <div className="flex justify-center items-center">
                                        <img src="https://via.placeholder.com/100" className="w-20 h-20 object-cover rounded-lg shadow-sm" />
                                    </div>
                                </td>
                                <td className="border px-4 py-3">Product Name</td>
                                <td className="border px-4 py-3">50<span>$</span></td>
                                <td className="border px-4 py-3 w-10">3</td>
                                <td className="border px-4 py-3">150<span>$</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b pb-3">Customer Information</h3>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Full Name:</span>
                                <span className="text-gray-600">John Doe</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Phone:</span>
                                <span className="text-gray-600">+1 234 567 890</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Address:</span>
                                <span className="text-gray-600">123 Main St, Springfield</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Payment Method:</span>
                                <span className="text-gray-600 font-bold">Cash</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Status:</span>
                                <span className="text-yellow-600 font-bold">Pending</span>
                            </div>
                        </div>
                    </div>

                    <form method="post" className="text-right">
                        <button className="bg-red-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onClick={handleCancel}>
                            Cancel Order
                        </button>
                    </form>
                </div>
            </section>

            <ToastContainer />
        </div>
    );
}

export default OrderDetail;