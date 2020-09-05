import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import applyStyle from '../Application/application.module.css';
import Card from './Card';


function Application ({userName, history, state}) {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        Axios.get('/api/cards/' + userName)
            .then(response => {
                if(response.data.success) {
                    let list = response.data.cards;

                    setCards(list.filter(index => index.process === state));
                }
            })
    }, [userName]);

    // Dashboard에서 받은 Card State에 따라 변경
    const bgStyle = {
        backgroundColor: 'rgb(245 245 245)'
    }

    // const cards = [
    //     {
    //         _id: 1,
    //         companyName: '스마일회사',
    //         startDate: '2020-08-24',
    //         endDate: '2020-09-02',
    //         infoDate: '2020-09-11',
    //         companyUrl: 'http://google.com',
    //         jobPosition: 'Web Platform Service FrontEnd',
    //         cardState: '작성 중'
    //     },
    //     {
    //         _id: 2,
    //         companyName: '해피회사',
    //         startDate: '2020-09-01',
    //         endDate: '2020-09-10',
    //         infoDate: '2020-09-11',
    //         companyUrl: 'http://naver.com',
    //         jobPosition: 'FrontEnd Web Service',
    //         cardState: '작성 중'
    //     },
    //     {
    //         _id: 3,
    //         companyName: 'A회사',
    //         startDate: '2020-08-10',
    //         endDate: '2020-08-15',
    //         infoDate: '',
    //         companyUrl: 'http://google.com',
    //         jobPosition: 'SW Developer',
    //         cardState: '지원 완료'
    //     },
    //     {
    //         _id: 4,
    //         companyName: 'B회사',
    //         startDate: '2020-08-24',
    //         endDate: '2020-08-25',
    //         infoDate: '2020-09-11',
    //         companyUrl: 'http://google.com',
    //         jobPosition: 'Front-End Developer',
    //         cardState: '지원 완료'
    //     }
    // ];

    const onClickResume = (id) => {
        history.push('/' + userName + '/'+ id);
    }

    return (
        cards.length > 0 ? 
        <div className={ applyStyle.container }>
                { cards.map(card => (
                    <Card card={card} key={card._id} onClickResume={onClickResume} style={bgStyle}/>
                ))}
        </div>
        : null
    )
}

export default Application