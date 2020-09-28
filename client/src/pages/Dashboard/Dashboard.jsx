import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import ToDoList from '../../components/views/ToDoList/ToDoList';
import RecruitsSite from '../../components/views/RecruitsSite/RecruitsSite';
import Application from '../../components/views/Application/Application';
import UploadCard from '../../components/modals/UploadCard/UploadCard';
import dashboartStyle from '../Dashboard/dashboard.module.css';
import fontStyle from '../../assets/css/fonts.module.css';
import { RESUME, TEST, INTERVIEW, FINAL } from '../../Config';


function Dashboard() {

    const param = useParams();
    const userName = param.userName;

    const [state, setState] = useState(false);

    const onClick = () => {
        setState(!state);
    }

    return (
        <div>
            <Header onClick={onClick}/>
            { state ? <UploadCard userName={userName} onClick={onClick} /> : null }
            <div className={ dashboartStyle.boxContainer } >
                {/* To Do */}
                <ToDoList userName={ userName }/>
                <div className={ dashboartStyle.gap }></div>
                {/* 바로가기 */}
                <div className={ fontStyle.sunflower }>>> 바로가기</div>
                <RecruitsSite />
                <div className={ dashboartStyle.gap }></div>
                {/* 서류 */}
                <div className={ fontStyle.sunflower }>>> 서류전형</div>
                <Application userName={userName} state={RESUME}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 시험 */}
                <div className={ fontStyle.sunflower }>>> 시험</div>
                <Application userName={userName} state={TEST}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 1차 면접*/}
                <div className={ fontStyle.sunflower }>>> 1차면접</div>
                <Application userName={userName} state={INTERVIEW}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 2차 면접 */}
                <div className={ fontStyle.sunflower }>>> 2차면접</div>
                <Application userName={userName} state={FINAL}/>
                <div className={ dashboartStyle.gap }></div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
