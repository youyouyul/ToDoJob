import React from 'react';
import headerStyle from '../Header/header.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import logo from '../../../assets/image/logo.png';
import profile from '../../../assets/image/profile.png';

function Header() {
    return (
        <nav className={ headerStyle.navigation } role='navigation'>
            <div className={ headerStyle.headerLeft }>
                { /* logo */ }
                <a className={ headerStyle.headerLogo} href='/dashboard'><img src={ logo } style={{ width: '2rem' }} alt="logo"/></a>
                <span className={ fontStyle.font } style={{ padding: '0.5rem', fontSize: '1.2rem'}}>
                    TO DO JOB
                </span> 
            </div>

            <div className={ headerStyle.headerCenter }>
                <div className={ headerStyle.headerSearch } style={{ padding: '0 10px'}}>
                    <input className={ headerStyle.headerInput }
                           type="text" placeholder="할 일 검색" />
                </div>
            </div>

            { /* search & profile */ }
            <div className={ headerStyle.headerRight }>
                <a className={ headerStyle.headerLogo } href='/dashboard'><img style={{ width: '2rem' }} src={ profile } alt="profile"/></a>
            </div>
        </nav>
    )
}

export default Header
