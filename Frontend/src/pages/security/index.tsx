import React, { useState } from "react";
import '../security/style.css';
import { NavLink, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const SignIn: React.FC = () => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 3000);
    };

    return (
        <div className="background-container flex justify-center items-center min-h-screen">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10 border border-gray-300">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5 justify-center">
                            <h2 className="font-bold text-[30px] text-blue-400">BEE FOOD</h2>
                        </div>

                        <form onSubmit={handleSubmit} method="post">
                            <div className="mt-5">
                                <label className="font-semibold text-sm text-blue-400 pb-1 block" htmlFor="login">Email</label>
                                <input type="email" className="border-blue-500 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="login" placeholder="Email..." required/>

                                <label className="font-semibold text-sm text-blue-400 pb-1 block" htmlFor="password">Password</label>
                                <input type="password" className="border-blue-500 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="password" placeholder="Password..." maxLength={20} required/>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="rememberMe" className="form-checkbox h-4 w-4 text-blue-600 border-2 border-blue-500"/>
                                    <label htmlFor="rememberMe" className="font-bold text-[15px] text-blue-400">Remember me</label>
                                </div>

                                <NavLink to="#" className="font-display font-bold text-[15px] text-blue-400 hover:text-blue-500 cursor-pointer">
                                    Forgot Password?
                                </NavLink>
                            </div>

                            <div className="mt-5">
                                <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-center items-center"
                                    disabled={isLoading}>
                                    {isLoading ? (
                                       <ThreeDots width="30" height="30" radius="9" color="#fff" ariaLabel="three-dots-loading" visible={true} /> 
                                    ) : ('SIGN IN')}
                                </button>
                            </div>
                        </form>
                        
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <NavLink to="#sign-up" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                    or sign up
                                </NavLink>
                            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                        </div>

                        <div className="flex justify-center w-full items-center mt-4">
                            <div>
                                <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                    <svg viewBox="0 0 24 24" height="25" width="25" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z" fill="#F44336"></path>
                                        <path d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z" fill="#2196F3"></path>
                                        <path d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z" fill="#FFC107"></path>
                                        <path d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z" fill="#00B060"></path>
                                        <path opacity=".1" d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"></path>
                                        <polygon opacity=".1" points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"></polygon>
                                        <path d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z" fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"></path>
                                    </svg>
                                    <span className="ml-2">Sign in with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;