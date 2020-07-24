import React from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/background.css';

function StartPage() {
    const styleText = {
        margin: 'auto',
        marginLeft: '60%',
        marginTop: '15%'
    };

    const styleBody = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    }

    const styleFoot = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: '10%',
        padding: '0 20px'
    }

    const styleFontColor = {
        color: 'red'
    }

    return (
        <div style={ styleText }>
            <div style={ styleBody }>
                <p>You're <span style={ styleFontColor }>BRAVER</span> than you believe,</p>
            </div>
            <div style={ styleBody }>
                <p><span style={ styleFontColor }>STRONGER</span> than you seem,</p>
            </div>
            <div style={ styleBody }>
                <p>and <span style={ styleFontColor }>SMARTER</span> than you think</p>
            </div>
            <div style={ styleFoot }>
                <p>- winnie the pooh -</p>
            </div>
        </div>
    )
}

export default StartPage