import React from 'react'
import Modal from 'react-modal';
import uploadStyle from '../UploadCard/uploadCard.module.css';

function UploadCard({ modalIsOpen }) {

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    Modal.setAppElement('#root');

    return (
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}  
          contentLabel="Example Modal"
        >

            <button>close</button>
            <div>I am a modal</div>
            <form>
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

                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
          </form>
        </Modal>
    )
}

export default UploadCard
