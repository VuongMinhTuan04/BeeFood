import React from "react";
import Menu from '../shared/menu';
import '../home/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
    
    // const handleBuyFoodSuccess = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event?.preventDefault();
    //     toast.success("Buy Food Successfully!", {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //     });
    // };

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[1200px] mx-auto px-4 my-32">
                <div className="py-4 mb-4 border w-auto mx-auto text-center rounded-full shadow-lg">
                    <div className="text-center">
                        <h3 className="select-none outline-none font-bold text-[20px] cursor-default mb-3">
                            CATEGORIES
                        </h3>

                        <div className="categories-list">
                            <ul className="flex space-x-9 items-center justify-center">
                                <li className="p-1 text-[17px]">
                                    <NavLink to="/" className="select-none outline-none block text-gray-700 hover:text-blue-500 focus:text-blue-700 transition-colors duration-300">
                                        All
                                    </NavLink>
                                </li>

                                <li className="p-1 text-[17px]">
                                    <NavLink to="#hamburger" className="select-none outline-none block text-gray-700 hover:text-blue-500 focus:text-blue-700 transition-colors duration-300">
                                        Hamburger
                                    </NavLink>
                                </li>

                                <li className="p-1 text-[17px]">
                                    <NavLink to="#pizza" className="select-none outline-none block text-gray-700 hover:text-blue-500 focus:text-blue-700 transition-colors duration-300">
                                        Pizza
                                    </NavLink>
                                </li>

                                <li className="p-1 text-[17px]">
                                    <NavLink to="#drink" className="select-none outline-none block text-gray-700 hover:text-blue-500 focus:text-blue-700 transition-colors duration-300">
                                        Drink
                                    </NavLink>
                                </li>

                                <li className="p-1 text-[17px]">
                                    <NavLink to="#salad" className="select-none outline-none block text-gray-700 hover:text-blue-500 focus:text-blue-700 transition-colors duration-300">
                                        Salad
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 select-none outline-none">
                    <div className="shadow-2xl rounded-lg overflow-hidden max-w-lg">
                        <NavLink to="/product">
                            <div className="flex items-center justify-center h-52">
                                <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                            </div>

                            <div className="p-4 h-30">
                                <h3 className="text-xl font-semibold mb-2 text-center">Hamburger Salad</h3>
                            </div>

                            <div className="flex justify-between items-center p-4 h-20">
                                <span className="text-lg font-semibold text-blue-400 line-through">
                                    100.00$
                                </span>
                                
                                <span className="text-lg font-semibold text-red-500">
                                    <i>100.00$</i>
                                </span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="shadow-2xl rounded-lg overflow-hidden max-w-lg">
                        <NavLink to="/product">
                            <div className="flex items-center justify-center h-52">
                                <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                            </div>

                            <div className="p-4 h-30">
                                <h3 className="text-xl font-semibold mb-2 text-center">Hamburger Salad</h3>
                            </div>

                            <div className="flex justify-between items-center p-4 h-20">
                                <span className="text-lg font-semibold text-blue-400 line-through">
                                    100.00$
                                </span>
                                
                                <span className="text-lg font-semibold text-red-500">
                                    <i>100.00$</i>
                                </span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="shadow-2xl rounded-lg overflow-hidden max-w-lg">
                        <NavLink to="/product">
                            <div className="flex items-center justify-center h-52">
                                <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                            </div>

                            <div className="p-4 h-30">
                                <h3 className="text-xl font-semibold mb-2 text-center">Hamburger Salad</h3>
                            </div>

                            <div className="flex justify-between items-center p-4 h-20">
                                <span className="text-lg font-semibold text-blue-400 line-through">
                                    100.00$
                                </span>
                                
                                <span className="text-lg font-semibold text-red-500">
                                    <i>100.00$</i>
                                </span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="shadow-2xl rounded-lg overflow-hidden max-w-lg">
                        <NavLink to="/product">
                            <div className="flex items-center justify-center h-52">
                                <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                            </div>

                            <div className="p-4 h-30">
                                <h3 className="text-xl font-semibold mb-2 text-center">Hamburger Salad</h3>
                            </div>

                            <div className="flex justify-between items-center p-4 h-20">
                                <span className="text-lg font-semibold text-blue-400 line-through">
                                    100.00$
                                </span>
                                
                                <span className="text-lg font-semibold text-red-500">
                                    <i>100.00$</i>
                                </span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="shadow-2xl rounded-lg overflow-hidden max-w-lg">
                        <NavLink to="/product">
                            <div className="flex items-center justify-center h-52">
                                <img src="https://via.placeholder.com/300" className="object-cover rounded-full border-4 border-blue-500" width={128} height={128} />
                            </div>

                            <div className="p-4 h-30">
                                <h3 className="text-xl font-semibold mb-2 text-center">Hamburger Salad</h3>
                            </div>

                            <div className="flex justify-between items-center p-4 h-20">
                                <span className="text-lg font-semibold text-blue-400 line-through">
                                    100.00$
                                </span>
                                
                                <span className="text-lg font-semibold text-red-500">
                                    <i>100.00$</i>
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;