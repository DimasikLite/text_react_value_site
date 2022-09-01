import Link from 'next/link'
import menu from '@core/constants/menu';

function mainMenu() {
    const styles = {
        color: '#0D62F0',
    }
    return (
        <div className="flex gap-x-12">
            {menu.map((menuItem) =>{
                return (
                    <Link className={'text-sm'} href={menuItem.href} key={menuItem.name}>
                        <a style={styles}>{menuItem.name}</a>
                    </Link>
                )
            })}
        </div>
     );
}

export default mainMenu;