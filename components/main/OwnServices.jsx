import BlockWithLine from "@components/elements/BlockWithLine";
import CardServices from "@components/main/CardServices";
import React, { useState } from 'react';
import {buttons, items} from '@core/constants/my_services'


function ownServices() {
    const [chips, setChips] = useState('one');
    return (
        <BlockWithLine title={'Услуги'}>
            <div className="flex flex-col gap-24 mb-4">
                <div className="flex justify-between">
                    <div className="text-6xl font-semibold">Наши услуги</div>
                    <div className="text-sm" style={{ maxWidth: '472px' }}>Вот вам яркий пример современных тенденций — перспективное планирование, в своём классическом</div>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <div className="text-2xl font-semibold">Выберите направление услуги</div>
                    <div className={'flex gap-4'}>
                        {buttons.map(button => {
                            return (
                                <button className={`w-full button_chips ${chips === button.number ? 'active' : ''}`} onClick={()=>setChips(button.number)} style={{ padding: '24px', boxShadow: '0px 8px 25px rgba(109, 134, 163, 0.1)' }}  key={button.number}>
                                    {button.name}
                                </button>
                            )
                        })}
                    </div>
                    <div className={'relative'}>
                        {Object.keys(items).map(ind => {
                            return (
                                <div className={['gap-4 grid listChips grid_shell_listChips', `${items[ind].length % 3 ? 'grid-shell-2' : 'grid-shell-3'}`, `${chips === ind ? 'active' : ''}`].join(' ')} key={ind}>
                                    {items[ind].map(item => {
                                        return (
                                            <CardServices item={item} key={`${item.title} + ${ind}`}/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </BlockWithLine>
     );
}

export default ownServices;