import BlockWithLine from "../anyElems/BlockWithLine";
import CardServices from "../main/CardServices";
import React, { useState } from 'react';


function ownServices() {
    const [chips, setChips] = useState('one');
    const buttons = [
        {name: 'Дизайн + сайт на тильде', number: 'one'},
        {name: 'Дизайн сайта', number: 'two'},
        {name: 'Брендинг', number: 'three'},
        {name: 'Оформление', number: 'four'},
    ]
    const items = {
        one: [
            {
                title: 'Лендинг',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: 25000,
                summNew: 20000,
                preSumm: '50%'
            },
            {
                title: 'Многостраничный сайт',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '18 дней',
                summOld: null,
                summNew: 29900,
                preSumm: '50%'
            },
            {
                title: 'Интернет магазин',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: null,
                summNew: 45000,
                preSumm: '50%'
            },
        ],
        two: [
            {
                title: 'Лендинг',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: 15000,
                summNew: 9590,
                preSumm: '50%'
            },
            {
                title: 'Многостраничный сайт',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '18 дней',
                summOld: null,
                summNew: 29900,
                preSumm: '50%'
            },
            {
                title: 'Интернет магазин',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: null,
                summNew: 45000,
                preSumm: '50%'
            },
        ],
        three: [
            {
                title: 'Разработка фирменного стиля',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: 25000,
                summNew: 20000,
                preSumm: '50%'
            },
            {
                title: 'Логотип «Эскиз»',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '18 дней',
                summOld: null,
                summNew: 29900,
                preSumm: '50%'
            },
            {
                title: 'Логотип «Начальный»',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: 25000,
                summNew: 20000,
                preSumm: '50%'
            },
            {
                title: 'Логотип «Расширенный»',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '18 дней',
                summOld: null,
                summNew: 29900,
                preSumm: '50%'
            },
        ],
        four: [
            {
                title: 'Лендинг',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '12 дней',
                summOld: 25000,
                summNew: 20000,
                preSumm: '50%'
            },
            {
                title: 'Многостраничный сайт',
                inSum: ['Анализ конкурентов', 'Разработка дизайна', 'Favicon для сайта', 'Верстка сайта'],
                other: ['Домен и хостинг', 'Копирайтинг', 'Правки'],
                deadline: '18 дней',
                summOld: null,
                summNew: 29900,
                preSumm: '50%'
            },
        ],
    }
    return (
        <BlockWithLine title={'Услуги'}>
            <div className="flex flex-col gap-24 mb-4">
                <div className="flex justify-between">
                    <div className="text-6xl font-semibold">Наши услуги</div>
                    <div className="text-sm" style={{ maxWidth: '472px' }}>Вот вам яркий пример современных тенденций — перспективное планирование, в своём классическом</div>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <div>Выберите направление услуги</div>
                    <div className={'flex gap-4'}>
                        {buttons.map(button => {
                            return (
                                <button className={`w-full button_chips ${chips === button.number ? 'active' : ''}`} onClick={()=>setChips(button.number)} style={{ padding: '24px', boxShadow: '0px 8px 25px rgba(109, 134, 163, 0.1)' }}>
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