import React, { useState } from "react";
import Menu from "../shared/menu";
import { ArchiveBoxXMarkIcon, CreditCardIcon, MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

import 'react-toastify/dist/ReactToastify.css';
import '../cart/style.css';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
    //Cart
    interface Product {
        id: number;
        name: string;
        price: number;
        quantity: number;
    }

    const [cartItems, setCartItems] = useState<Product[]>([
        { id: 1, name: "Pizza", price: 20, quantity: 1 },
        { id: 2, name: "Burger", price: 15, quantity: 1 },
        { id: 3, name: "Burger Pizza", price: 30, quantity: 2 },
    ]);

    const handleInputChange = (id: number, value: string) => {
        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue) || parsedValue <= 0) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: 1 }
                    : item
                )
            );
        } else if (parsedValue > 30) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: 30 }
                    : item
                )
            );
        } else {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: parsedValue }
                    : item
                )
            );
        }
    };

    const handleIncrease = (id: number) => {
        setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id ? { ...item, quantity: Math.min(item.quantity + 1, 30) } : item
        )
        );
    };

    const handleDecrease = (id: number) => {
        setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
        );
    };

    //Delete
    const handleDeleteItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

        toast.success("Item deleted successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleClearCart = () => {
        setCartItems([]);

        toast.success("All items cleared from the cart!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    //Order
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/order');
    };
    
    return (
        <div className="flex">
            <header>
                <Menu />
            </header>

            <section className="max-w-screen-xl mx-auto px-4 my-32">
                <div className="flex space-x-6">
                    <div className="w-[1300px] bg-blue-300 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-center text-white">YOUR CART</h2>

                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
                                    <table className="min-w-full table-auto border-none">
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 w-24">
                                                    <img src="https://via.placeholder.com/100" className="rounded-md" />
                                                </td>

                                                <td className="px-4 py-2 w-64">
                                                    <h3 className="font-bold text-[19px]">{item.name}</h3>
                                                    <p className="font-semibold text-blue-500 text-[18px]">{item.price}<span>$</span></p>
                                                </td>

                                                <td className="px-4 py-2 w-32">
                                                    <div className="flex items-center gap-2">
                                                        <button type="button" className="quantity-status px-1 py-1 bg-gray-200 border rounded hover:bg-gray-300" 
                                                            onClick={() => handleDecrease(item.id)} disabled={item.quantity <= 1}>
                                                            <MinusIcon className="h-5 w-5 text-gray-700" />
                                                        </button>

                                                        <input type="number" className="w-16 p-1 border rounded text-center" value={item.quantity} 
                                                            onChange={(e) => handleInputChange(item.id, e.target.value)} 
                                                            onInput={(e) => e.preventDefault()}/>
                                                        
                                                        <button type="button" className="quantity-status px-1 py-1 bg-gray-200 border rounded hover:bg-gray-300" 
                                                            onClick={() => handleIncrease(item.id)} disabled={item.quantity >= 30}>
                                                            <PlusIcon className="h-5 w-5 text-gray-700" />
                                                        </button>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-2 w-32">
                                                    <p className="font-semibold text-blue-500 text-[19px]">{(item.price * item.quantity).toFixed(0)}<span>$</span></p>
                                                </td>

                                                <td className="px-4 py-2 w-16">
                                                    <button className="text-red-500 hover:text-red-600 focus:border-none" onClick={() => handleDeleteItem(item.id)}>
                                                        <XMarkIcon width={24} height={24} />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div> 

                        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-lg">Total: {totalPrice.toFixed(0)}$</p>
                                
                                <div className="flex gap-4">
                                    <form onSubmit={handleSubmit} method="post">
                                        <button className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 
                                            ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''} flex justify-between items-center`}
                                            disabled={cartItems.length === 0}>
                                            Order Now
                                            <CreditCardIcon width={24} height={24} className="ml-2" />
                                        </button>
                                    </form>

                                    <button className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 
                                        ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''} flex justify-between items-center`}
                                        onClick={handleClearCart} disabled={cartItems.length === 0}>
                                        Delete All Cart
                                        <ArchiveBoxXMarkIcon width={24} height={24} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </div>
    );
}

export default Cart;