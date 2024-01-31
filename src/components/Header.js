import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { API_OPTIONS, LOGO, USERICON, languageOptions } from "../utils/constants";
import { languageOptionsSelect } from "../utils/configSlice";
import { addSearchMovie, addSearchMovies, addSearchMoviesInput } from "../utils/moviesSlice";
import { LuSearch } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";






function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const [searchBar, setSearchBar] = useState(false)
    const [searchMovieInput, setSearchMovieInput] = useState('')

    const handleSearchMovie = () => {
        setSearchBar(!searchBar)
        dispatch(addSearchMoviesInput())
        console.log(searchBar);
    }
    const handleCloseSearch = () => {
        setSearchBar(!searchBar)
        dispatch(addSearchMoviesInput())
    }


    const handleSingnOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                // An error happened.
            });
    };



    const handleClickLanguage = (e) => {
        dispatch(languageOptionsSelect(e.target.value))
    }

    const searchMovie = async () => {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + searchMovieInput + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const data = await res.json()
        dispatch(addSearchMovies(data.results))

    }
    useEffect(() => {
        dispatch(addSearchMovie(searchMovieInput))
        searchMovie()
    }, [searchMovieInput])

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
    console.log(searchMovieInput);
    return (
        <div className="absolute py-2 px-2 w-[100%] z-50 sm:!px-6 md:!pt-6 md:bg-gradient-to-b from-black flex justify-between items-center">
            <img
                className="md:w-[7rem] w-[3rem] h-[1rem] md:h-[2rem]"
                src={LOGO}
                alt="netflix-logo"

            />


            {/* <h1 className="text-red-600 text-[2rem] font-bold">NETFLIX</h1> */}
            {user && (
                <div className="flex items-center cursor-pointer relative">
                    <div className="flex items-center search-wrapper">

                        {searchBar &&
                            <form onSubmit={(e) => e.preventDefault()} className="flex items-center relative mr-2">
                                <input onChange={e => setSearchMovieInput(e.target.value)} className=" bg-transparent border border-red-600 outline-none md:text-[15px] text-white py-1 pl-1 md:p-2 text-[5px] mr-2 rounded-sm" placeholder="Search" />
                                <IoIosClose className="text-white md:text-3xl mr-2 cursor-pointer absolute right-0 " onClick={handleCloseSearch} />
                            </form>
                        }
                        {!searchBar && <LuSearch onClick={handleSearchMovie} className="text-white md:text-2xl mr-2 cursor-pointer " />
                        }
                    </div>

                    <div className=" group ">
                        <div className="flex items-center">
                            <img
                                title={displayName}
                                className="md:w-8 w-[20px] rounded-md hover cursor-pointer mr-2"
                                src={USERICON}
                                alt="user-icon"
                            />
                            <MdArrowDropDown className="text-white text-2xl ml-[-10px] transform transition-transform group-hover:rotate-180 delay-400" />
                        </div>
                        <div className="absolute hidden mt-[1rem] w-[12rem] group-hover:block hover:block transform transition-all bg-black bg-opacity-50 right-[2rem] rounded duration-1000">
                            <ul className="px-2 py-2 ">
                                <li className="flex items-center mb-3">
                                    <img className="w-[2rem] rounded" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />
                                    <p className="mx-2  text-white">{displayName}</p>
                                </li>
                                <li className="flex items-center  mb-3">
                                    <img className="w-[2rem] rounded" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                                    <p className="mx-2  text-white">user-2</p>
                                </li>
                                <li className="flex items-center mb-3">
                                    <img className="w-[2rem] rounded" src="https://matrixstore.pk/wp-content/uploads/2021/04/DmBraqkXcAA1Yco.jpg" alt="" />
                                    <p className="mx-2  text-white">User-1</p>
                                </li>
                                <li className="flex items-center text-white "><FaRegUser className="mr-3 ml-1 text-white text-2xl" /> Account</li>

                            </ul>
                            <div className="border-t mt-2 py-3 border-t-orange-50">
                                <button className="text-white text-[14px] text-center w-full" onClick={handleSingnOut}>
                                    Sign out of Netflix
                                </button>
                            </div>
                        </div>
                    </div>


                    <button className="text-white flex hidden items-center text-[10px] p-[5px] md:p-2 bg-red-600 mr-2" onClick={handleSingnOut}>
                        Sign Out<PiSignOut className="ml-2 text-xl" /></button>
                    <select className="md:p-2 p-[5px] bg-black hidden border-red-600 border outline-none text-white"
                        onClick={handleClickLanguage}>
                        {/* <option value="">Language</option> */}
                        {languageOptions.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>)}

                    </select>
                </div>
            )}
        </div>
    );
}

export default Header;
