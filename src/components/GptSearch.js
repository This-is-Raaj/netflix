import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { BGIMG_URL } from '../utils/constants'

function GptSearch() {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BGIMG_URL} alt="" />
            </div>
            <GptSearchBar />
            <GptSuggestions />

        </div>
    )
}

export default GptSearch
