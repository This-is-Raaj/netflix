import React from 'react'

function VideoTitle({ originalTitle, overview }) {
    return (
        <div className='w-[100%]  aspect-video absolute p-2.5 md:p-16 md:h-[100%] '>
            <div className='text-white w-8/12 md:w-6/12 mt-[8rem] md:mt-[15rem]'>
                <h1 className='font-bold text-[10px] md:text-[2rem] uppercase'>{originalTitle}</h1>
                <p className='md:text-[1rem] md:block hidden text-[10px] font-semibold'>{overview.substring(0, 200)}...</p>
                <div className='mt-5 flex'>
                    <button className='h-[50px] hidden  text-black hover:bg-opacity-50 font-bold flex items-center justify-center rounded mr-1 p-1 w-[130px]  bg-white'>
                        <span className='inline-block mr-1'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/play--v1.png" alt="play--v1" /></span> Play</button>
                    <button className='h-[50px] hidden justify-center rounded p-2 flex items-center w-[130px] font-bold text-black bg-gray-500'>
                        {/* <span className='inline-block mr-1'><img width="30" height="30" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1" /></span> */}
                        More Info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle
