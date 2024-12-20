import React, { useState } from "react";
import Menu from '../shared/menu';
import './style.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Home: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleBuyFoodSuccess = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        toast.success("Buy Food Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progressClassName: "progress-bar-custom",
        });
    };

    const products = [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5"
    ];

    // Lọc các sản phẩm theo từ khóa nhập vào
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query) {
            setSuggestions(products.filter(product =>
                product.toLowerCase().includes(query.toLowerCase())
            ));
        } else {
            setSuggestions([]);
        }
    };

    // Xử lý khi người dùng chọn một sản phẩm (hoặc nhấn Enter)
    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && suggestions.length > 0) {
            setSearchQuery(suggestions[0]);
            setSuggestions([]);
        }
    };

    // Khai báo trạng thái cho activeCategory
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[1600px] mx-auto px-4 my-32">
                <div className="flex space-x-6">
                    <aside className="w-[250px] rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold uppercase mb-6 text-center text-blue-400">Categories</h2>
                        <ul className="space-y-4">
                            {['Hamburger', 'Pizza', 'Drink', 'Salad'].map((category) => (
                                <li key={category}>
                                    <a href="#" className={`text-lg px-3 py-2 rounded-lg transition-all duration-300 categories ${activeCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(category)} tabIndex={0} >
                                        {category}
                                        <ChevronRightIcon className="ml-2 h-5 w-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <article className="w-3/4">
                        <div className="relative mb-5">
                            <input type="text" className="w-full pl-10 pr-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What food are you looking for?"
                                value={searchQuery ?? ''} onChange={handleSearchChange} onKeyDown={handleKeyDown}/>
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        
                            {suggestions.length > 0 && (
                                <ul className="absolute left-0 right-0 mt-2 bg-white shadow-lg max-h-48 overflow-y-auto z-10">
                                    {suggestions.map((suggestion, index) => (
                                        <li key={index} className="px-4 py-2 text-gray-700 hover:bg-blue-400 cursor-pointer" onClick={() => handleSuggestionClick(suggestion)} >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="shadow-2xl rounded-lg overflow-hidden max-w-md mx-auto">
                                <a href="#">
                                    <div className="flex items-center justify-center h-52">
                                        <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                                    </div>

                                    <div className="p-4 h-40">
                                        <h3 className="text-xl font-semibold mb-2 text-center">Product 1</h3>
                                        <p className="text-gray-700 text-center">
                                            Description of the product goes here. This is just a placeholder text.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 h-20 bg-green-50">
                                        <span className="text-lg font-semibold text-blue-400 line-through">
                                            100.00$
                                        </span>
                                        
                                        <span className="text-lg font-semibold text-red-500">
                                            <i>100.00$</i>
                                        </span>
                                        
                                        <button className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-44" onClick={handleBuyFoodSuccess}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </a>
                            </div>

                            <div className="shadow-2xl rounded-lg overflow-hidden max-w-md mx-auto">
                                <a href="#">
                                    <div className="flex items-center justify-center h-52">
                                        <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                                    </div>

                                    <div className="p-4 h-40">
                                        <h3 className="text-xl font-semibold mb-2 text-center">Product 1</h3>
                                        <p className="text-gray-700 text-center">
                                            Description of the product goes here. This is just a placeholder text.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 h-20 bg-green-50">
                                        <span className="text-lg font-semibold text-blue-400">
                                            100.00$
                                        </span>
                                        
                                        <button className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-44" onClick={handleBuyFoodSuccess}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </a>
                            </div>

                            <div className="shadow-2xl rounded-lg overflow-hidden max-w-md mx-auto">
                                <a href="#">
                                    <div className="flex items-center justify-center h-52">
                                        <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                                    </div>

                                    <div className="p-4 h-40">
                                        <h3 className="text-xl font-semibold mb-2 text-center">Product 1</h3>
                                        <p className="text-gray-700 text-center">
                                            Description of the product goes here. This is just a placeholder text.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 h-20 bg-green-50">
                                        <span className="text-lg font-semibold text-blue-400 line-through">
                                            100.00$
                                        </span>
                                        
                                        <span className="text-lg font-semibold text-red-500">
                                            <i>100.00$</i>
                                        </span>
                                        
                                        <button className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-44" onClick={handleBuyFoodSuccess}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </a>
                            </div>

                            <div className="shadow-2xl rounded-lg overflow-hidden max-w-md mx-auto">
                                <a href="#">
                                    <div className="flex items-center justify-center h-52">
                                        <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                                    </div>

                                    <div className="p-4 h-40">
                                        <h3 className="text-xl font-semibold mb-2 text-center">Product 1</h3>
                                        <p className="text-gray-700 text-center">
                                            Description of the product goes here. This is just a placeholder text.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 h-20 bg-green-50">
                                        <span className="text-lg font-semibold text-blue-400 line-through">
                                            100.00$
                                        </span>
                                        
                                        <span className="text-lg font-semibold text-red-500">
                                            <i>100.00$</i>
                                        </span>
                                        
                                        <button className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-44" onClick={handleBuyFoodSuccess}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </article>
                </div>
            </section>

            <ToastContainer />
        </div>
    );
}

export default Home;