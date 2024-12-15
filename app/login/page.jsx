"use client"; 
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 relative">
            {/* Decorative Lights */}
            <div className="first-light"></div>
            <div className="sec-light"></div>

            <div className="bg-white h-full shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <img
                        src="./image/Exclude.png"
                        alt="Designer"
                        className="w-full h-48 md:h-full object-cover"
                    />
                </div>

                {/* Right Form Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                    <div className="bg-white h-full px-6 py-4 md:px-8 md:py-6 shadow-inner">
                        <div className="form-head my-6 mt-2 md:my-8">
                            <h2 className="text-lg md:text-2xl font-bold mb-2 logo text-gray-800 text-center">
                                Knots & Knits
                            </h2>
                            <p className="text-center text-sm md:text-base text-gray-500 mb-4">
                                Welcome to Knots & Knits, please sign in to continue.
                            </p>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="xyz123@gmail.com"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="********"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                />
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <a
                                    href="#"
                                    className="text-sm text-blue-500 hover:underline transition"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition"
                            >
                                Sign In
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm">
                            Don’t have an account?{" "}
                            <Link href="/signup" className="text-blue-500 hover:underline transition">
                                Create account
                            </Link>
                        </p>
                        <div className="mt-4 text-center text-sm text-gray-400">
                            Or sign in with
                        </div>
                        <div className="mt-2 flex justify-center gap-4">
                            <button onClick={() => signIn("google")} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition">
                                <img
                                    src="./image/google.png"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                            </button>
                            <button onClick={() => signIn("github")} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition">
                                <img
                                    src="./image/github.png"
                                    alt="GitHub"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
