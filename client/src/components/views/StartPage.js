import React from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/startPage.css';

function StartPage() {
    return (
        <div className="start">
            <div style={{ textAlign: 'center', paddingTop: '1%'}}>
                    <p style={{ fontSize: '3rem', margin: '0'}}>What To Do for a Job ?</p>
            </div>
            <div className="startLogin" style={{ textAlign: 'center', paddingTop: '10%'}}>
                <a href='/login'>Sign In</a>
                <span> | </span>
                <a href='/register'>Sign Up</a>
            </div>
            <div className="startBody">
                <div className="startText">
                    <p>You're <span style={{ color: 'red'}}>BRAVER</span> than you believe,</p>
                </div>
                <div className="startText">
                    <p><span style={{ color: 'red'}}>STRONGER</span> than you seem,</p>
                </div>
                <div className="startText">
                    <p>and <span style={{ color: 'red'}}>SMARTER</span> than you think</p>
                </div>
                <div className="startText">
                    <p>- winnie the pooh -</p>
                </div>
            </div>
        </div>
    )
}

export default StartPage