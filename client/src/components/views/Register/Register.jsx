import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import regStyle from '../Login/login.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';

function Register(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onChangeConfirmPw = e => {
        setConfirmPw(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        if(password !== confirmPw) {
            return alert('비밀번호와 비밀번호 확인이 다릅니다.');
        }

        let body = {
            email: email,
            name: name,
            password: password
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    history.push('/login');
                } else {
                    alert('회원가입 실패하였습니다.');
                }
            });
    }

    return (
    <div className={ regStyle.box }>
        <div className={ fontStyle.font } style={{ fontSize: '4rem'}}>
            Sign Up
        </div>
        <br />
        <div className={ regStyle.body }>
            <div className={ regStyle.formBox }>
                <form className={ regStyle.form } onSubmit={ onSubmit }>
                    <div className={ regStyle.inputBox }>
                        <label>
                            Username
                        </label>
                        <input className={ regStyle.input } type="text" value={name} onChange={ onChangeName }/>
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label>
                            Email
                        </label>
                        <input className={ regStyle.input } type="email" value={email} onChange={ onChangeEmail }/>
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label>
                            Password
                        </label>
                        <input className={ regStyle.input } type="password" value={password} onChange={ onChangePassword }/>
                    </div>
                    <div className={ regStyle.inputBox }>
                        <label>
                            Password Check
                        </label>
                        <input className={ regStyle.input } type="password" value={confirmPw} onChange={ onChangeConfirmPw } />
                    </div>
                    <div className={ regStyle.signUp }>
                        <button className={ regStyle.btn } >
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
