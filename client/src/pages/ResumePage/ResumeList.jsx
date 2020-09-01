import React, { useState } from 'react'
import resumeStyle from '../ResumePage/resumePage.module.css';
import { FaChevronDown } from 'react-icons/fa';
import Resume from './Resume';


const ResumeList = ({ resume }) => {
    const [context, setContext] = useState(resume.context);
    const [textFlag, setTextFlag] = useState(false);

    const onChange = e => {
        setContext(e.target.value);
    }

    const onClickDown = () => {
        console.log(textFlag);
        setTextFlag(!textFlag);
    }


    return (
        <div className={ resumeStyle.resumeBox }>
            <div className={ resumeStyle.title }>
                <p>{resume.title}</p>
                <span><FaChevronDown onClick={onClickDown}/></span>
            </div>
            { textFlag ? <Resume context={context} onChange={onChange} limit={resume.limit}/> : null }
        </div>
    )
}

export default ResumeList;