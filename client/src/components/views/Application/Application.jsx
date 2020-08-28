import React from 'react';
import applyStyle from '../Application/application.module.css';
import Card from './Card';


function Application () {

    // Dashboard에서 받은 Card State에 따라 변경
    const bgStyle = {
        backgroundColor: '#ece9ff'
    }

    const cards = [
        {
            _id: 1,
            companyName: '해피회사',
            startDate: '2020-09-01',
            endDate: '2020-09-10',
            infoDate: '2020-09-11',
            companyUrl: 'http://naver.com',
            jobPosition: 'FrontEnd Web Service',
            cardState: '작성 중'
        },
        {
            _id: 2,
            companyName: '스마일회사',
            startDate: '2020-08-24',
            endDate: '2020-09-02',
            infoDate: '2020-09-11',
            companyUrl: 'http://google.com',
            jobPosition: 'Web Platform Service FrontEnd',
            cardState: '작성 중'
        },
        {
            _id: 3,
            companyName: 'A회사',
            startDate: '2020-08-10',
            endDate: '2020-08-15',
            infoDate: '',
            companyUrl: 'http://google.com',
            jobPosition: 'SW Developer',
            cardState: '지원 완료'
        },
        {
            _id: 4,
            companyName: 'B회사',
            startDate: '2020-08-24',
            endDate: '2020-08-25',
            infoDate: '2020-09-11',
            companyUrl: 'http://google.com',
            jobPosition: 'Front-End Developer',
            cardState: '지원 완료'
        }
    ];

    const onClick = (id) => {
        console.log(id);
    }

    return (
        <div className={ applyStyle.container }>
            { cards.map(card => (
                <Card card={card} key={card._id} onClick={onClick} style={bgStyle}/>
            ))}
        </div>
    )
}

export default Application