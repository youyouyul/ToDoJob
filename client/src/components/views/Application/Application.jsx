import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import UpdateCard from '../../modals/UpdateCard/UpdateCard';
import applyStyle from '../Application/application.module.css';
import Card from './Card';
import DetailCard from '../../modals/DetailCard/DetailCard';

function Application ({userName, state, card}) {

    //const cards = card.filter(index => index.process === state);

    const [cards, setCards] = useState([]);
    const [detailState, setDetailState] = useState(false);
    const [updateState, setUpdateState] = useState(false);
    const [detailCard, setDetailCard] = useState([]);
    const [updateCard, setUpdateCard] = useState([]);

    const onClickDetail = (id) => {
        setDetailState(!detailState);
        setDetailCard(cards.filter(index => index._id === id));
    }

    const onClickState = (id) => {
        setUpdateState(!updateState);
        setUpdateCard(cards.filter(index => index._id === id));
    }

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

    return (
        cards.length > 0 ? 
            <div className={ applyStyle.container }>
                { cards.map(card => (
                    <Card card={card} key={card._id} onClickDetail={onClickDetail} onClickState={onClickState} style={bgStyle}/>
                ))}
            { detailState ? <DetailCard cards={detailCard} onClick={onClickDetail}/> : null }    
            { updateState ? <UpdateCard cards={updateCard} onClick={onClickState}/> : null }
            </div>
        : null
    )
}

export default Application