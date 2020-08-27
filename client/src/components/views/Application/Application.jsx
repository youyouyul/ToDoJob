import React from 'react';
import applyStyle from '../Application/application.module.css';
import Card from './Card';


function Application () {
    const cards = [
        {
            _id: 1,
            companyName: '네이버',
            startDate: '2020-09-01',
            endDate: '2020-09-30',
            companyUrl: 'http://naver.com',
            jobPosition: 'FrontEnd Web Service',
            state: '작성 중'
        },
        {
            _id: 2,
            companyName: '라인',
            startDate: '2020-08-24',
            endDate: '2020-09-01',
            companyUrl: 'http://google.com',
            jobPosition: 'Web Flatform Service FrontEnd',
            state: '지원 완료'
        }
    ];

    const onClick = (id) => {
        console.log(id);
    }

    return (
        <div className={ applyStyle.container }>
            { cards.map(card => (
                <Card card={card} key={card._id} onClick={onClick}/>
            ))}
        </div>
    )
}

export default Application