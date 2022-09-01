import Logo from './Logo';
import MainMenu from './MainMenu';
import MyButton from '@components/UI/MyButton';
import React, { useState } from 'react';

function header() {
    const [popUp, setPopUp] = useState(false)
    const openPopUp = () => {
        setPopUp(true);
    }
    const popUpServices = () => {
        if(popUp) {
            return (
                <div onClick={()=>{setPopUp(false)}} className="fixed text-white bg-black top-0 bottom-0 left-0 right-0 opacity-50" style={{zIndex: '10000'}}>
                    {/* Контент */}
                </div>
            )
        } else {
            return
        }
    }
    return (
        <div className="w-full py-4 sticky top-0 z-20" style={{backgroundColor: '#f9f9fb'}}>
            {popUpServices()}
            <div className="flex gap-6 justify-between items-center max-width" style={{ margin: '0 auto' }}>
                <Logo/>
                <MainMenu/>
                <MyButton onClick={openPopUp}>Заказать сайт</MyButton>
            </div>
        </div>
     );
}

export default header;