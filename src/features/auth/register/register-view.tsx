import React from "react";

const Register = () => {
    return (
        <>
            <div className="absolute w-full h-full flex flex-col justify-center items-center bg-green-200">
                <div className="w-[88%]  md:w-1/3 min-h-32 rounded-xl shadow-lg m-auto bg-white px-10 py-10 flex flex-col gap-5">
                    <div>
                        <h2 className="text-3xl font-sans">Sign up</h2>
                    </div>
                    <div>
                        <form action="">
                            <div className="flex flex-col gap-3 justify-start">
                                <label htmlFor="" className="text-gray-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full py-2 px-3 text-md font-mono text-gray-600 border border-gray-300 outline-none rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap-3 justify-start">
                                <label htmlFor="" className="text-gray-500">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full py-2 px-3 text-md font-mono text-gray-600 border border-gray-300 outline-none rounded-md"
                                />
                            </div>

                            <div className="w-full py-6">
                                <button className="w-full py-3 rounded-md shadow-md text-center bg-green-400 text-white hover:bg-green-600">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[88%]  md:w-1/3 text-end px-10 relative bottom-[25%] xl:bottom-[20%] ">
                    <p className="cursor-pointer text-md hover:text-gray-600">
                        Sign in
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
