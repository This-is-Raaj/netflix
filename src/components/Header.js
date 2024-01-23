import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USERICON, languageOptions } from "../utils/constants";
import { gptSearchToggle } from "../utils/gptSlice";
import { languageOptionsSelect } from "../utils/configSlice";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gptSearch = useSelector(store => store.gptSearch.gptToggle)
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

    const handleClickGpt = () => {
        dispatch(gptSearchToggle())
    }

    const handleClickLanguage = (e) => {
        dispatch(languageOptionsSelect(e.target.value))
    }

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
                className="w-[10rem] h-[5rem]"
                src={LOGO}
                alt="netflix-logo"
            />
            {user && (
                <div className="flex items-center">
                    {gptSearch &&
                        <select className="p-2 mr-2 bg-black text-white"
                            onClick={handleClickLanguage}>
                            {/* <option value="">Language</option> */}
                            {languageOptions.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>)}

                        </select>}
                    <button onClick={handleClickGpt} className="bg-red-600 text-white p-2 mr-2 rounded-sm">GPT Search</button>
                    <img
                        onClick={handleSingnOut}
                        className="w-10 hover cursor-pointer"
                        src={USERICON}
                        alt="user-icon"
                    />
                    <p className="ml-2 font-bold text-white">{displayName}</p>
                </div>
            )}
        </div>
    );
}

export default Header;
