import React from 'react';
import '../../assets/css/header.css';
import '../../assets/css/fonts.css';
import logo from '../../assets/image/logo.png';
import profile from '../../assets/image/profile.png';

function Header() {

    return (
        <nav className='bg-white flex p-2 items-center' role='navigation'>
            <div className='header md:flex flex-grow'>
                { /* logo */ }
                <a className='header_logo' href='/dashboard'><img src={ logo } alt="logo"/></a>
                <div className='fontStyle pt-1' style={{ padding: '5px 10px', fontSize: '1.2rem'}}>
                    TO DO JOB
                </div> 
            </div>

            { /* search & profile */ }
            <div className='md:flex ml-4 items-center justify-end' style={{ padding: '0 10px'}}>
                <div className='items-center ml-3 pt-1' style={{ padding: '0 10px'}}>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="할 일 검색" />
                </div>
                <a className='header_logo' href='/dashboard'><img src={ profile } alt="profile"/></a>
            </div>
        </nav>
    )
}

export default Header
