import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';


function mainMenu() {
    const styles = {
        color: '#0D62F0',
    }
    const router = useRouter()
    const [menu, setMenu] = useState([
        {name: 'Услуги', href: '/services'},
        {name: 'Портфолио', href: '/portfolio'},
        {name: 'О нас', href: '/about'},
        {name: 'Контакты', href: '/contacts'},

    ]);
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