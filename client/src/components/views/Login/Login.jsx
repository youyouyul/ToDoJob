import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import fontStyle from '../../../assets/css/fonts.module.css';
import loginStyle from '../Login/login.module.css';

function Login(props) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = e => {
        setEmail(e.target.value);
    }

    const onPWHandler = e => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/dashboard');
                } else {
                    alert('Login Error');
                }
            });
    }

    return (
    <div className={ loginStyle.box }>
        <div className={ fontStyle.font } style={{ fontSize: '4rem'}}>
            Login
        </div>
        <br />
        <div className={ loginStyle.body }>
            <div className={ loginStyle.formBox }>
                <form className={ loginStyle.form } onSubmit={ onSubmitHandler }>
                    <div className={ loginStyle.inputBox }>
                        <label className={ loginStyle.logText }>
                            Username
                        </label>
                        <input className={ loginStyle.input } type="email" value={ email } onChange={ onEmailHandler }/>
                    </div>
                    <div className={ loginStyle.loginPw }>
                        <label className={ loginStyle.logText }>
                            Password
                        </label>
                        <input className={ loginStyle.input } type="password" value={ password } onChange={ onPWHandler }/>
                    </div>
                    <div className={ loginStyle.signIn }>
                        <button className={ loginStyle.btn }>
                            Sign In
                        </button>
                        {/* <a className={ loginStyle.pwText } href="#">
                            Forgot Password?
                        </a> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
