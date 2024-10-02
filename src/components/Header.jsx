import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-10">
            <nav className='py-4 px-4'>
                <h1 className='text-xl font-bold text-white ms-6'>Haidar<span className='text-orange-500'>P</span></h1>
            </nav>
        </header>
    );
};

export default Header;
