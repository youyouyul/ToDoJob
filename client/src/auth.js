import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../src/_actions/user_action';

export default function(Component, option) {

    function AuthCheck() {

        const dispatch = useDispatch();
        const history = useHistory();

        useEffect(() => {

            dispatch(auth()).then(response => {
                if(!response.payload.isAuth) {
                    if(option) {
                        history.push('/login');
                    }
                } else {
                    history.push('/' + response.payload.name);
                }
            })
        }, []);

        return (
            <Component />
        )
    }

    return AuthCheck
}


