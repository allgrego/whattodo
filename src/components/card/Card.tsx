import React, { ReactElement } from 'react'

const Card = ({ children }: { children: ReactElement | ReactElement[] | string }) => {
    return (
        <div className='overflow-hidden bg-gray-100 dark:bg-slate-800 dark:text-white w-full md:mx-5 rounded-3xl h-full  shadow-xl'>
            {children}
        </div>
    );
}

export default Card;