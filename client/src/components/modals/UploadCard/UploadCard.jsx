import React from 'react'
import uploadStyle from '../UploadCard/uploadCard.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaTimes } from 'react-icons/fa';

function UploadCard({ modalIsOpen }) {

    return (
        <div className={ uploadStyle.container}>
            <div className={ uploadStyle.modal}>
                <div className={ uploadStyle.modalHeader}>
                    <button><FaTimes/></button>
                </div>
                <div className={ uploadStyle.modalBody}>
                    <form className={ `${ uploadStyle.modalForm } ${ fontStyle.sunflower }`}>
                        <div>
                            <label>기업 명</label>
                            <input />
                        </div>
                        <div>
                            <label>시작일</label>
                            <input />    
                        </div>
                        <div>
                            <label>마감일</label>
                            <input />
                        </div>
                        <div>
                            <label>발표일</label>
                            <input />  
                        </div>
                        <div>
                            <label>직무</label>
                            <input />
                        </div>
                    </form>
                </div>
                <div className={ uploadStyle.modalFooter }>
                    <button>저장</button>
                </div>
          </div>
        </div>
    )
}

export default UploadCard
