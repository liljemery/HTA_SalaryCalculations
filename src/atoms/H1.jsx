import React from 'react'

const H1 = ({h1Text}) => {
    return (
        <h1 className='text-center py-3 bg-gray-900 rounded-t-md w-3/4 lg:w-3/6 mx-auto text-3xl font-extrabold leading-none text-white md:text-4xl lg:text-5xl'>
            {h1Text}
        </h1>   
    )
}

export default H1