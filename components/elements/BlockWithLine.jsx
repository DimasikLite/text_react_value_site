import LineBlocks from '@assets/images/LineBlocks'

const blockWithLine = ({title, children}) => {
    return (
        <div className={'max-width relative w-full'} style={{ margin: '0 auto' }}>
            <div className={'absolute flex items-center gap-8 -left-40'}>
                <LineBlocks/>
                <div className={'text-lg'}>{title}</div>
            </div>
            <div className={'pt-10'}>
                {children}
            </div>
        </div>
     );
}

export default blockWithLine;