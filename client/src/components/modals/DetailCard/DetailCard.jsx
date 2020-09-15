import React, { useState, useEffect, useRef, useCallback } from 'react';
import fontStyle from '../../../assets/css/fonts.module.css';
import modalStyle from '../../modals/modals.module.css';
import { FaTimes } from 'react-icons/fa';

const DetailCard = ({ cards, onClick }) => {
    const card = cards[0];
    const [modalState, setModalState] = useState(true);

    const [companyUrl, setCompanyUrl] = useState(card.companyUrl);
    const [startDate, setStartDate] = useState(card.startDate);
    const [endDate, setEndDate] = useState(card.endDate);
    const [infoDate, setInfoDate] = useState(card.infoDate);
    const [jobPosition, setJobPosition] = useState(card.jobPosition);

    const urlRef = useRef();
    const startRef = useRef();
    const endRef = useRef();
    const infoRef = useRef();
    const positionRef = useRef();

    useEffect(() => {
        console.log(1);
        if(modalState) {
            urlRef.current.readOnly = true;
            startRef.current.readOnly = true;
            endRef.current.readOnly = true;
            infoRef.current.readOnly = true;
            positionRef.current.readOnly = true;
        }
    }, modalState);

    const setState = useCallback(
        (state) => {
            urlRef.current.readOnly = !state;
            startRef.current.readOnly = !state;
            endRef.current.readOnly = !state;
            infoRef.current.readOnly = !state;
            positionRef.current.readOnly = !state;
        },
        [],
    )

    const onClickUpd = (e) => {
        e.preventDefault();
        setModalState(!modalState);
        setState(modalState);
    }

    const onClickDlt = () => {

    }

    return (
        <div className={ modalStyle.container }>
            <div className={ `${ modalStyle.modal } ${ fontStyle.sunflower }`}>
                <div className={ modalStyle.modalHeader}>
                    <p>{ modalState ?  card.companyName : card.companyName + "  수정" }</p>
                    <button onClick={onClick} ><FaTimes/></button>
                </div>
                <div className={ modalStyle.modalBody}>
                    <form className={ modalStyle.modalForm }
                          onSubmit >
                        <div>
                            <label>기업 사이트 *</label>
                            <input value={ companyUrl } ref={urlRef} onChange={(e) => setCompanyUrl(e.target.value)} required/>
                        </div>
                        <div>
                            <label>직무 *</label>
                            <input value={ jobPosition } ref={positionRef} onChange={(e) => setJobPosition(e.target.value)} required/>
                        </div>
                        <div className={ modalStyle.date }>
                            <div style={{ marginRight: '1rem'}}>
                                <label>시작일 *</label>
                                <input value={ startDate } ref={startRef} onChange={(e) => setStartDate(e.target.value)} required/>    
                            </div>
                            <div>
                                <label>마감일 *</label>
                                <input value={ endDate } ref={endRef} onChange={(e) => setEndDate(e.target.value)} required/>
                            </div>
                        </div>
                        <div>
                            <label>발표일</label>
                            <input value={ infoDate } ref={infoRef} onChange={(e) => setInfoDate(e.target.value)}/>  
                        </div>
                    </form>
                    <div className={ modalStyle.modalFooter }>
                        <span>
                            {modalState ? <button onClick={onClickUpd}>수정</button> : <button onClick={onClickUpd}>취소</button>}
                            {modalState ? <button onClick={onClickDlt}>삭제</button> : <button onClick={onClickUpd}>저장</button> }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard
