import BlockWithLine from "@components/elements/BlockWithLine";
import CardPortfolio from "@components/main/CardPortfolio";
import React, { useState } from 'react';

import fattorino1 from '@assets/images/portfolio/fattorino1.png'
import fattorino2 from '@assets/images/portfolio/fattorino2.png'
import fattorino3 from '@assets/images/portfolio/fattorino3.png'
import picture from '@assets/images/portfolio/picture.png'
import picture2 from '@assets/images/portfolio/picture2.png'
import picture3 from '@assets/images/portfolio/picture3.png'
import picture4 from '@assets/images/portfolio/picture4.png'

const buttons = [
    {name: 'Веб-дизайн', number: 'one'},
    {name: 'Мобильный дизайн', number: 'two'},
    {name: 'Брендинг', number: 'three'},
    {name: 'Логотипы', number: 'four'},
    {name: 'Оформление', number: 'five'},
]
const items = {
    one: [
        {
            title: 'Fattorino',
            cols: 2,
            image: fattorino1
        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino3

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture4

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture3

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: picture

        },
    ],
    two: [
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino3

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture4

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: fattorino1
        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture3

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: picture

        },
    ],
    three: [
        {
            title: 'Fattorino',
            cols: 1,
            image: picture3

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: fattorino1
        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino3

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture4

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: picture

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino2

        },
    ],
    four: [
        {
            title: 'Fattorino',
            cols: 1,
            image: picture2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino3

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture4

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: fattorino1
        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture3

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: picture

        },
    ],
    five: [
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino3

        },
        {
            title: 'Fattorino',
            cols: 2,
            image: fattorino1
        },
        {
            title: 'Fattorino',
            cols: 2,
            image: picture

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture2

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture4

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: picture3

        },
        {
            title: 'Fattorino',
            cols: 1,
            image: fattorino2

        },
    ],
}

function portfolio() {
    const [chips, setChips] = useState('one');
    return (
        <BlockWithLine title={'ПОРТФОЛИО'}>
            <div className="flex flex-col gap-24 mb-4">
                <div className="flex flex-col gap-8">
                    <div className="text-6xl font-semibold">Последние работы</div>
                    <div className="text-sm" style={{ maxWidth: '472px' }}>Вот вам яркий пример современных тенденций — перспективное планирование, в своём классическом</div>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <div className={'flex gap-6'}>
                        {buttons.map(button => {
                            return (
                                <button className={`w-full button_portfolio ${chips === button.number ? 'active' : ''}`} onClick={()=>setChips(button.number)}>
                                    {button.name}
                                </button>
                            )
                        })}
                    </div>
                    <div className={'relative'}>
                        {Object.keys(items).map(ind => {
                            return (
                                <div className={['gap-4 grid listPortfolio grid_shell_listPortfolio grid-shell-3', `${chips === ind ? 'active' : ''}`].join(' ')} key={ind}>
                                    {items[ind].map(item => {
                                        return (
                                            <CardPortfolio item={item} key={`${item.title} + ${ind}`}/>
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

export default portfolio;