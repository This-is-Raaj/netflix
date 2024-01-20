import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIN] = useState(true);

    const handleSigninPage = () => {
        setIsSignIN(!isSignIn);
    };

    return (
        <>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""
                />
            </div>
            <form className="absolute w-3/12 p-12 bg-black top-[30%] right-0 left-0 my-auto mx-auto bg-opacity-80">
                <h1 className="mb-8 text-white font-bold text-3xl text-center">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && (
                    <input
                        className="bg-gray-800 text-white outline-none p-4 mb-8 rounded-sm  w-full"
                        type="text"
                        placeholder="Name"
                    />
                )}

                <input
                    className="bg-gray-800 text-white outline-none p-4 mb-8 rounded-sm  w-full"
                    type="text"
                    placeholder="Email or phone number"
                />

                <input
                    className="outline-none text-white bg-gray-800 p-4 rounded-sm  w-full"
                    type="text"
                    placeholder="Password"
                />

                <button className="p-3 rounded bg-red-600 mt-8 mb-4  w-full text-white font-sans">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p
                    onClick={handleSigninPage}
                    className="text-white hover cursor-pointer"
                >
                    {isSignIn
                        ? "New to Neflix? Sign up now."
                        : "Already have account? Sign in."}
                </p>
            </form>
        </>
    );
};

export default Login;
