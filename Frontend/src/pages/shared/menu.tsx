import React from "react";
import { DocumentTextIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const Menu: React.FC = () => {
    return (
        <div className="bg-blue-400 h-[90px] shadow-[0_4px_8px_rgba(169,169,169,1)] fixed top-0 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-white">
                <div>
                    <img src="https://via.placeholder.com/300" className="rounded-full object-cover" width={80} height={80}/>
                </div>

                <div className="space-x-12 flex items-center font-bold">
                    <div className="flex justify-center items-center space-x-2">
                        <a href="#" className="text-white transition-colors flex items-center">
                            <HomeIcon className="h-7 w-7 mr-2" />
                            Trang Chủ
                        </a>
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                        <a href="#" className="text-white transition-colors flex items-center">
                            <ShoppingBagIcon className="h-7 w-7 mr-2" />
                            Thực Đơn
                        </a>
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                        <a href="#" className="text-white transition-colors flex items-center">
                            <DocumentTextIcon className="h-7 w-7 mr-2" />
                            Đơn Hàng
                        </a>
                    </div>
                </div>

                <div>
                    <a href="#">
                        <img src="https://via.placeholder.com/100" className="rounded-full w-12 h-12 object-cover"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;