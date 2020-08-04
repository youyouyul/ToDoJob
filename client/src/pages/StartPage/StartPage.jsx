import React from 'react';
import fontStyle from '../../assets/css/fonts.module.css';
import startStyle from '../StartPage/startPage.module.css';

function StartPage() {
    const fontColor = {
        color: 'red'
    };

    return (
        <div className={ [startStyle.start, fontStyle.font].join(' ') }>
            <div className={ startStyle.startTitle }>
                What To Do for a Job ?
            </div>
            <div className={ startStyle.startLogin }>
                <a href='/login'>Sign In</a>
                <span> | </span>
                <a href='/register'>Sign Up</a>
            </div>
            <div className={ startStyle.startBody }>
                <div>
                    <p>You're <span style={fontColor}>BRAVER</span> than you believe,</p>
                </div>
                <div>
                    <p><span style={fontColor}>STRONGER</span> than you seem,</p>
                </div>
                <div>
                    <p>and <span style={fontColor}>SMARTER</span> than you think</p>
                </div>
                <div>
                    <p>- winnie the pooh -</p>
                </div>
            </div>
        </div>
    )
}

export default StartPage