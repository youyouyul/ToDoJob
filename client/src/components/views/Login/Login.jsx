import React from 'react';
import fontStyle from '../../../assets/css/fonts.module.css';
import loginStyle from '../Login/login.module.css';

function Login() {
    return (
    <div className={ loginStyle.box }>
        <div className={ fontStyle.font } style={{ fontSize: '4rem'}}>
            Login
        </div>
        <br />
        <div className={ loginStyle.body }>
            <div className={ loginStyle.formBox }>
                <form className={ loginStyle.form }>
                    <div className={ loginStyle.inputBox }>
                        <label className={ loginStyle.label } for="username">
                            Username
                        </label>
                        <input className={ loginStyle.input } type="text" />
                    </div>
                    <div className={ loginStyle.loginPw }>
                        <label className={ loginStyle.label } for="password">
                            Password
                        </label>
                        <input className={ loginStyle.input } type="password" />
                    </div>
                    <div className={ loginStyle.signIn }>
                        <button className={ loginStyle.btn }>
                            Sign In
                        </button>
                        <a className={ loginStyle.pwText } href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
