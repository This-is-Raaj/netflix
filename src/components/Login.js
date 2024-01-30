import React, { useRef, useState } from "react";
import Header from "./Header";
import { userValidate } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BGIMG_URL } from "../utils/constants";

const Login = () => {
    const [isSignIn, setIsSignIN] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const handleSigninPage = () => {
        setIsSignIN(!isSignIn);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleValidUser = () => {
        const message = userValidate(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + "" + errorCode);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            photoURL: photoURL,
                            displayName: displayName,
                        })
                    );
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + "" + errorCode);
                });
        }
    };

    return (
        <>
            <Header />
            <div className="absolute">
                <img
                    src={BGIMG_URL}
                    alt=""
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded absolute w-3/12 p-12 bg-black top-[30%] right-0 left-0 my-auto mx-auto bg-opacity-80"
            >
                <h1 className="mb-4 text-white font-bold text-3xl">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && (
                    <input
                        required
                        className="bg-gray-800 text-white outline-none p-4 mb-4 rounded-sm  w-full"
                        type="text"
                        placeholder="Name"
                        ref={name}
                    />
                )}

                <input
                    className="bg-gray-800 text-white outline-none p-4 mb-4 rounded-sm  w-full"
                    type="text"
                    placeholder="Email or phone number"
                    ref={email}
                />

                <input
                    className="outline-none text-white bg-gray-800 p-4 rounded-sm  w-full"
                    type="text"
                    placeholder="Password"
                    ref={password}
                />
                <p className="text-white">{errorMessage}</p>
                <button
                    onClick={handleValidUser}
                    className="p-3 rounded bg-red-600 mt-8 mb-4  w-full text-white font-sans"
                >
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
