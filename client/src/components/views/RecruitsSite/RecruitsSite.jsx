import React, { useState } from 'react';
import recruitStyle from '../RecruitsSite/recruitsSite.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
//import Modal from 'react-modal';

function RecruitsSite() {
    // var subtitle;
    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }
    
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }
    
    // function closeModal(){
    //     setIsOpen(false);
    // }

    return (
        // 잡코리아 자소설 사람인 인크루트 잡플래닛 
        //    +     +    +     +     +
        <div className={ recruitStyle.container }>
            <div className={ [recruitStyle.body, fontStyle.sunflower].join(' ') }>
                <a href="http://jobkorea.co.kr"> 잡코리아 </a>
                <a href="http://jasoseol.com"> 자소설닷컴 </a>
                <a href="http://saramin.co.kr"> 사람인 </a>
                <a href="http://incruit.com"> 인크루트 </a>
                <a href="http://jobplanet.co.kr">잡플래닛 </a>


                {/* 추후개발
                <div><i className="fa fa-plus"></i></div>
                <div><i className="fa fa-plus"></i></div>
                <div><i className="fa fa-plus"></i></div>
                <div><i className="fa fa-plus"></i></div>
                <div><i className="fa fa-plus"></i></div>

                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal> */}
            </div>
        </div>
    )
}

export default RecruitsSite
