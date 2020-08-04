import React from 'react';
import regStyle from '../Login/login.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';

function Register() {
    return (
    <div className={ regStyle.box }>
        <div className={ fontStyle.font } style={{ fontSize: '4rem'}}>
            Sign Up
        </div>
        <br />
        <div className={ regStyle.body }>
            <div className={ regStyle.formBox }>
                <form className={ regStyle.form }>
                    <div className={ regStyle.inputBox }>
                        <label className={ regStyle.label }style={{float: 'left'}}>
                            Username
                        </label>
                        <input className={ regStyle.input } type="text" />
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label className={ regStyle.label } style={{float: 'left'}}>
                            Email
                        </label>
                        <input className={ regStyle.input } type="email" />
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label className={ regStyle.label } style={{float: 'left'}}>
                            Password
                        </label>
                        <input className={ regStyle.input } type="password" />
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label className={ regStyle.label } style={{float: 'left'}}>
                            Password Check
                        </label>
                        <input className={ regStyle.input } type="password" />
                    </div>
                    <div className={ regStyle.signUp }>
                        <button className={ regStyle.btn } type="button">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register
