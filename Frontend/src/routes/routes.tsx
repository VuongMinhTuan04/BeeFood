import Cart from "../pages/cart";
import Home from "../pages/home";
import Order from "../pages/order";
import OrderDetail from "../pages/order/detail";
import SignIn from "../pages/security";

const publicRoutes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/sign-in",
        component: SignIn
    }
];

const privateRoutes = [
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/order",
        component: Order
    },
    {
        path: "/order-detail",
        component: OrderDetail
    }
];