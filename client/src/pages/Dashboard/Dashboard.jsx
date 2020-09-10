import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import ToDoList from '../../components/views/ToDoList/ToDoList';
import RecruitsSite from '../../components/views/RecruitsSite/RecruitsSite';
import Application from '../../components/views/Application/Application';
import UploadCard from '../../components/modals/UploadCard/UploadCard';
import dashboartStyle from '../Dashboard/dashboard.module.css';
import fontStyle from '../../assets/css/fonts.module.css';
import { RESUME, TEST, INTERVIEW, FINAL } from '../../Config';



function Dashboard({ match, history }) {
    const userName = match.params.userName;

    const [state, setState] = useState(false);
    //const [updateState, setUpdateState] = useState(false);

    const onClick = () => {
        setState(!state);
    }

    const cards = [
        {
            _id: 1,
            companyName: '스마일회사',
            startDate: '2020-08-24',
            endDate: '2020-09-02',
            infoDate: '2020-09-11',
            companyUrl: 'http://google.com',
            jobPosition: 'Web Platform Service FrontEnd',
            process: 0,
            state: 1,
            result: 0
        },
        {
            _id: 2,
            companyName: '해피회사',
            startDate: '2020-09-01',
            endDate: '2020-09-10',
            infoDate: '',
            companyUrl: 'http://naver.com',
            jobPosition: 'FrontEnd Web Service',
            process: 1,
            state: 0,
            result: 0
        },
        {
            _id: 3,
            companyName: 'A회사',
            startDate: '2020-08-10',
            endDate: '2020-08-15',
            infoDate: '',
            companyUrl: 'http://google.com',
            jobPosition: 'SW Developer',
            process: 2,
            state: 1,
            result: 0
        },
        {
            _id: 4,
            companyName: 'B회사',
            startDate: '2020-08-24',
            endDate: '2020-08-25',
            infoDate: '2020-09-11',
            companyUrl: 'http://google.com',
            jobPosition: 'Front-End Developer',
            process: 3,
            state: 2,
            result: 2
        }
    ];

    return (
        <div>
            <Header onClick={onClick}/>
            { state ? <UploadCard userName={userName} onClick={onClick}/> : null }
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
                <Application userName={userName} state={RESUME} card={cards}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 시험 */}
                <div className={ fontStyle.sunflower }>>> 시험</div>
                <Application userName={userName} state={TEST} card={cards}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 1차 면접*/}
                <div className={ fontStyle.sunflower }>>> 1차면접</div>
                <Application userName={userName} state={INTERVIEW} card={cards}/>
                <div className={ dashboartStyle.gap }></div>
                {/* 2차 면접 */}
                <div className={ fontStyle.sunflower }>>> 2차면접</div>
                <Application userName={userName} state={FINAL} card={cards}/>
                <div className={ dashboartStyle.gap }></div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
