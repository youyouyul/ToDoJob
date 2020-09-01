import React, {useState} from 'react'
import resumeStyle from '../ResumePage/resumePage.module.css';

function Resume({ context, onChange, limit }) {

    return (
        <div>
            <div className={ resumeStyle.context }>
                <textarea type="text" value={context} onChange={onChange} />
            </div>
            <div className={ resumeStyle.textCnt}>
                <p>글자수 : {context.length} / {limit}</p>
            </div>
        </div>
    )
}

export default Resume
