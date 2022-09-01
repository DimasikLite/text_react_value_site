import Pen from '@assets/images/Pen'


function titleBanner() {
    const textTitle = 'Дизайн и разработка для бизнеса'
    return (
        <div className={'py-8 flex gap-x-24 items-center max-width'} style={{ margin: '0 auto' }}>
            <div className={'w-full'} style={{ fontSize: '62px', fontWeight: '600', lineHeight: '86px', letterSpacing: '0.02em', color: '#2B384F'}}>{textTitle}</div>
            <div className={'w-full flex items-center'}>
                <div className={'p-20 bg-white shadow-lg'} style={{ borderRadius: '60px', transform: 'rotate(8deg) translateX(50px)'}}>
                    <Pen width={174} height={177}/>
                </div>
                <div className={'z-10 p-24 bg-white shadow-lg'} style={{ borderRadius: '60px', transform: 'rotate(-5deg)' }}>
                    <Pen width={218} height={222}/>
                </div>
            </div>
        </div>
     );
}

export default titleBanner;