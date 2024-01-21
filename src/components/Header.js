import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USERICON } from "../utils/constants";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSingnOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                // An error happened.
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe()
    }, []);
    const displayName = user?.displayName;
    return (
        <div className="absolute w-[100%] z-50 px-4 bg-gradient-to-b from-black flex justify-between items-center">
            <img
                className="w-56"
                src={LOGO}
                alt="netflix-logo"
            />
            {user && (
                <div className="flex items-center">
                    <img
                        onClick={handleSingnOut}
                        className="w-10 hover cursor-pointer"
                        src={USERICON}
                        alt="user-icon"
                    />
                    <p className="ml-2 font-bold">{displayName}</p>
                </div>
            )}
        </div>
    );
}

export default Header;
