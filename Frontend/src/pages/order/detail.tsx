import React from "react";
import Menu from '../shared/menu';
import '../order/style.css';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetail: React.FC = () => {

    return (
        <div>
            <header>
                <Menu/>
            </header>

            <section className="max-w-[800px] mx-auto px-4 my-32 select-none outline-none">
                Hello Wolrd
            </section>

        </div>
    );
}

export default OrderDetail;