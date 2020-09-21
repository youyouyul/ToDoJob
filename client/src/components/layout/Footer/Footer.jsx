import React from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Footer() {
    const history = useHistory();

    const onClick = () => {
        Axios.get('/api/users/logout').then(response => {
            if(response.data.success) {
                history.push("/login");
            } else {
                alert('Log Out Failed');
            }
        });
    }

    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem', cursor: 'pointer'
        }}>
            <a onClick={onClick}>Logout</a>
        </div>
    )
}

export default Footer
