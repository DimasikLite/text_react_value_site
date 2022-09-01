import MyButton from '@components/UI/MyButton'

const CardServices = ({item}) => {
    const prices = () => {
        if(item.summOld) {
            return (
                <div className="flex flex-col justify-end">
                    <div className="text-red-600 text-xl font-semibold">{Math.round((item.summNew - item.summOld) / item.summOld * 100)}%</div>
                    <div className="text-2xl font-bold">от {item.summNew} р</div>
                    <div className="text-lg px-1 relative w-max" style={{ color: '#788497', textDecoration: 'line-through' }}>
                        <div>от {item.summOld} р</div>
                        <div className="absolute top-1/2 bottom-1/2 left-0 right-0 h-0.5 bg-red-600"></div>
                    </div>
                    <div className="text-sm" style={{ color: '#788497' }}>Предоплата {item.preSumm}</div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col justify-end">
                    <div className="text-red-600 text-xl font-semibold">&nbsp;</div>
                    <div className="text-2xl font-bold">от {item.summNew} р</div>
                    <div className="text-sm" style={{ color: '#788497' }}>Предоплата {item.preSumm}</div>
                </div>
            )
        }
    }
    return (
        <div className="card flex flex-col h-full p-8 gap-6 bg-white rounded-3xl shadow-lg">
            <div className="flex flex-col gap-4 h-full justify-between">
                <div className="font-semibold text-2xl">{item.title}</div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-base font-semibold">Что входит в стоимость:</div>
                        <ul>
                            {item.inSum.map(list => {
                                return (
                                    <li className="text-sm" key={Math.random()}>
                                        {list}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-base font-semibold">Отдельно:</div>
                        <ul>
                            {item.other.map(list => {
                                return (
                                    <li className="text-sm" key={Math.random()}>
                                        {list}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex items-end justify-between" style={{ minHeight: '108px' }}>
                    {prices()}
                    <div className="flex flex-col gap-4 items-end">
                        <div className=" h-full  text-lg font-semibold" style={{ color: '#788497' }}>Срок от {item.deadline}</div>
                        <MyButton>Оформить заявку</MyButton>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardServices;