import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../src/_actions/user_action';

export default function(Component, option) {

    function AuthCheck(props) {

        const dispatch = useDispatch();
        const history = useHistory();

        useEffect(() => {

            dispatch(auth()).then(response => {
                if(!response.payload.isAuth) {
                    if(option) {
                        history.push('/login');
                    }
                } else {
                    if(!option) {
                        console.log(response.payload.name)
                        history.push('/' + response.payload.name);
                    }
                }
            })

        }, []);

        return (
            <Component />
        )
    }

    return AuthCheck
}


