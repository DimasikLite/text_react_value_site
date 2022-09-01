import MyButton from '@components/UI/MyButton'
import React, { useMemo } from 'react'


const cardPortfolio = ({item}) => {
    return (
        <div className={`card flex flex-col h-full gap-6 bg-white rounded-3xl shadow-lg overflow-hidden col-span-${item.cols}`}>
            <div className="hidden col-span-2 col-span-3 col-span-1"></div>
            <img className="" src={item.image.src} style={{ objectFit: 'cover', maxHeight: '500px' }} alt=""></img>
        </div>
     );
}

export default cardPortfolio;