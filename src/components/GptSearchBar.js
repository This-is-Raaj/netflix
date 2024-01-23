import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux'

function GptSearchBar() {
    const language = useSelector(store => store.config.selectLanguage)
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='rounded w-1/2 bg-black p-4 grid grid-cols-12'
                onClick={(e) => e.preventDefault()}>
                <input className='p-4 mr-2 col-span-9 outline-none' type="text" placeholder={lang[language].gptPlaceHolder} />
                <button className='p-4 col-span-3  bg-red-600 text-white font-bold'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
