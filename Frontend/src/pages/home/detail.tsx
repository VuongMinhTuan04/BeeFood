import React, { useState } from "react";
import Menu from '../shared/menu';
import '../home/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Product: React.FC = () => {
    
    const handleBuyFoodSuccess = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        toast.success("Buy Food Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    //Product
    interface Product {
        id: number;
        img: string;
        quantity: number;
    }

    const [products, setProducts] = useState([
        { id: 1, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 2, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 3, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 4, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 5, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 6, img: "https://via.placeholder.com/90", quantity: 1 },
        { id: 7, img: "https://via.placeholder.com/90", quantity: 1 },
    ]);

    const handleInputChange = (id: number, value: string) => {
        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue) || parsedValue <= 0) {
            setProducts((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: 1 } : item
                )
            );
        } else if (parsedValue > 30) {
            setProducts((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: 30 } : item
                )
            );
        } else {
            setProducts((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: parsedValue } : item
                )
            );
        }
    };

    const handleIncrease = (id: number) => {
        setProducts((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.min(item.quantity + 1, 30) } : item
            )
        );
    };

    const handleDecrease = (id: number) => {
        setProducts((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
            )
        );
    };

    const shuffleArray = (array: Product[]): Product[] => {
        let shuffledArray = array.slice(); // sao chép mảng để không thay đổi mảng gốc

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // hoán đổi các phần tử
        }

        return shuffledArray;
    };

    const limitedProducts = shuffleArray(products).slice(0, 5);

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[1200px] mx-auto px-4 my-32 select-none outline-none">
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex justify-center mb-8">
                            <img src="https://via.placeholder.com/500" className="object-cover rounded-lg w-[400px] h-[400px]" alt="Product Image" />
                        </div>

                        <div>
                            <div className="flex gap-4 flex-wrap justify-center">
                                {limitedProducts.map((product) => (
                                    <NavLink key={product.id} to="#1">
                                        <div className="bg-white rounded-lg w-[90px] h-[90px]">
                                            <img src={product.img} className="object-contain rounded-lg" alt="Product" />
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold mb-4">Hamburger Salad</h1>

                            <p className="text-lg text-gray-700 mb-6">
                                A fresh, healthy salad made with the finest ingredients, perfect for a quick meal or as a side dish.
                            </p>

                            <div className="flex items-center gap-1 mb-6">
                                <button className="quantity-status px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300" 
                                    onClick={() => handleDecrease(1)} disabled={products[0].quantity <= 1}>
                                    <span className="font-semibold">-</span>
                                </button>

                                <input type="number" className="w-20 p-2 border rounded text-center"
                                    value={products[0].quantity} min={1} max={30} onChange={(e) => handleInputChange(1, e.target.value)}/>

                                <button className="quantity-status px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300" 
                                    onClick={() => handleIncrease(1)} disabled={products[0].quantity >= 30}>
                                    <span className="font-semibold">+</span>
                                </button>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-gray-400 line-through">100.00$</span>
                                <span className="text-2xl font-semibold text-red-500">50.00$</span>
                            </div>

                            <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" 
                                onClick={handleBuyFoodSuccess}>
                                Add to Menu
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </div>
    );
}

export default Product;