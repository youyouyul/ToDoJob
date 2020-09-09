import React from 'react'
import updateStyle from '../UpdateCard/updateCard.module.css';

const UpdateCard = ({ card }) => {
    console.log(card)
    return (
        <div className={ updateStyle.container }>
            <div className={ updateStyle.modal }>
                <div className={ updateStyle.modalHeader}>
                    <p>{ card.companyName }</p>
                    {/* <button onClick={onClick}><FaTimes/></button> */}
                </div>
                <div className={ updateStyle.modalBody}>
                    <form className={ updateStyle.modalForm }
                          onSubmit >
                        <div>
                            <label>기업 사이트 *</label>
                            <input value onChange required/>
                        </div>
                        <div>
                            <label>직무 *</label>
                            <input value onChange required/>
                        </div>
                        <div className={ updateStyle.date}>
                            <div style={{ marginRight: '3rem'}}>
                                <label>시작일 *</label>
                                <input value onChange required/>    
                            </div>
                            <div>
                            <label>마감일 *</label>
                            <input value onChange required/>
                            </div>
                        </div>
                        <div>
                            <label>발표일</label>
                            <input value onChange/>  
                        </div>
                        <div className={ updateStyle.modalFooter }>
                            <button>저장</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard
