import React from 'react';
import '../styles/Menu.css';
import { MenuList } from '../components/MenuList';
import MenuItem from '../components/MenuItem';

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {MenuList.map((item, index) => {
                    return <MenuItem key={index} image={item.image} name={item.name} price={item.price} />;
                })}
            </div>
        </div>
    );
}

export default Menu;
