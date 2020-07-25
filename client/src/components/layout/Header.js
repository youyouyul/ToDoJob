import React from 'react';
import '../../assets/css/header.css';

function Header() {
    const style = {
        /* 레이아웃 */
        display: 'flex',
        position: 'fixed',
        height: '60px',
        width: '100%',
        top: '0px',
        zIndex: '5',

        backgroundColor: 'white',

        /* 폰트 */
        fontSize: '2.5rem'
    }

    const headerStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: '5',
    }

    return (
        <nav className='header' style={ headerStyle }>
            <div className="header_logo">
                <a href='/'><img style={{ width: '40%', alignItems: 'center' }} src={ logo } alt="logo"/></a>
                <span>
                    TO DO JOB
                </span>
            </div>
        </nav>

    )
}

export default Header
